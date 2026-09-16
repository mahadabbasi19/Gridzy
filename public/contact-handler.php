<?php
/**
 * Gridzy contact form handler.
 *
 * The site is a static export (Next.js `output: "export"`, no Node
 * server at runtime) deployed to cPanel/Apache shared hosting, so
 * there's no API route to send mail from. This plain PHP script —
 * copied into the export verbatim from public/ — fills that gap using
 * PHP's built-in mail(), which shared hosts have pre-configured for
 * the domain out of the box (no SMTP credentials to manage).
 *
 * Receives the multistep form's JSON payload, validates it, and emails
 * the inquiry to response@gridzy.dev with Reply-To set to the
 * submitter so a strategist can just hit reply.
 */

declare(strict_types=1);

// --- CORS / method guard --------------------------------------------
header("Content-Type: application/json; charset=utf-8");

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedHost = 'gridzy.dev';
if ($origin !== '' && (str_ends_with(parse_url($origin, PHP_URL_HOST) ?? '', $allowedHost))) {
    header("Access-Control-Allow-Origin: $origin");
}
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// --- Parse & validate --------------------------------------------------
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

/** Strip anything that could be used for header injection. */
function clean_field(mixed $value): string
{
    $value = is_string($value) ? $value : '';
    $value = str_replace(["\r", "\n"], ' ', $value);
    return trim($value);
}

// Honeypot: a hidden field real users never fill in. Silently accept
// (never tip off the bot) but skip actually sending the mail.
$honeypot = clean_field($data['website'] ?? '');

$service = clean_field($data['service'] ?? '');
$details = trim((string) ($data['details'] ?? ''));
$name = clean_field($data['name'] ?? '');
$email = clean_field($data['email'] ?? '');
$company = clean_field($data['company'] ?? '');

$errors = [];
if ($name === '') {
    $errors[] = 'Name is required.';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email is required.';
}
if ($service === '') {
    $errors[] = 'Service is required.';
}

if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => implode(' ', $errors)]);
    exit;
}

if ($honeypot !== '') {
    // Pretend it worked; drop it on the floor.
    echo json_encode(['ok' => true]);
    exit;
}

// --- Compose & send ------------------------------------------------------
$to = 'response@gridzy.dev';
$subject = 'New project inquiry — ' . ($company !== '' ? $company : $name);

$bodyLines = [
    'New inquiry submitted via gridzy.dev/contact',
    '',
    'Name:     ' . $name,
    'Email:    ' . $email,
    'Company:  ' . ($company !== '' ? $company : '—'),
    'Service:  ' . $service,
    '',
    'Project details:',
    $details !== '' ? $details : '—',
];
$body = implode("\n", $bodyLines);

$fromDomain = $_SERVER['SERVER_NAME'] ?? 'gridzy.dev';
$headers = [
    'From: Gridzy Website <no-reply@' . $fromDomain . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Could not send the message. Please try again or email us directly.']);
    exit;
}

echo json_encode(['ok' => true]);
