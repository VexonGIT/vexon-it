# Selected projects

Practical software, home-service reliability, and technical communication. Each
project below separates the working artifact from the tests actually completed.
These are independent projects and prototypes; the descriptions do not claim
paid clients, revenue, platform monetization, or partner endorsements.

## Wi-Fi versus internet: an original video production workflow

**The problem.** Full Wi-Fi bars are easy to mistake for proof that internet
access works. A useful explanation needs to show the two connections clearly,
remain readable on a phone, and avoid diagnosing a fault without evidence.

**The build.** A Python and Manim workflow produces an original caption-led
explainer using animated device, router, and internet diagrams. The landscape
and portrait editions use separate layouts. The story introduces the two links,
illustrates one possible upstream interruption, and demonstrates two checks:
try another website or app, then another device on the same Wi-Fi. A visible
phone-specific caption says to disable mobile data for that comparison and
restore it afterward. The closing scene suggests checking the provider's outage
information before buying equipment.

**What was verified.** The landscape export is 1920 × 1080 at 30 fps for 46
seconds; the portrait export is 1080 × 1920 at 30 fps for 38 seconds. All 2,520
video frames were decoded successfully. Both files use H.264 with yuv420p pixel
format, a silent stereo AAC track at 48 kHz, and a verified faststart layout.
All audio frames were decoded and their samples were exactly zero. Six visual
checkpoints per edition were reviewed, with an additional full-size check of
the portrait test instructions. The deliverables include a thumbnail, poster,
caption and timing data, editable source, and machine-readable verification.
Production used an existing pinned container with network access disabled, a
two-CPU quota, and a 2 GiB memory limit.

**Scope.** This is a completed media artifact and repeatable production workflow.
The network diagram is illustrative. It does not establish a diagnosis of any
particular installation. Representative frames received visual review; a human
did not watch every frame in real time. A finished export does not establish
platform acceptance, audience demand, or earnings.

**Use within Vexon.** Explain Vexon's own technology work clearly, reuse original
source for its public educational posts, and retain measurable export checks.
This is internal promotion and development, not an outsourced content service.

## Private home operations: reliability, local inference, and recovery

**The problem.** A home dashboard can appear available while a camera image is
stale, a tablet has stopped rendering, or a long assistant request exceeds its
deadline. Backup files also provide limited reassurance without a restore test.
The project treats those as separate acceptance conditions.

**The build.** The private service environment combines health checks, an
authenticated application bridge, camera and news caching, local-assistant
request handling, and encrypted backups. Transport heartbeat and rendered-screen
telemetry are recorded separately. Assistant requests use a shared deadline and
report which local attempt or fallback answered. Service changes retain rollback
images. Recovery tooling restores a defined selection into a temporary location,
validates its contents, and records a successful receipt only after the checks
pass.

**What was verified.** The dated August 27, 2026 acceptance record shows a
previous deep assistant request ending at the bridge deadline, followed by a
successful authenticated request returning in 82.47 seconds through its declared
local fallback. The evaluator confirmed a non-empty answer, local provider
scope, no service restart, and absence of its unique prompt marker in the checked
logs. A camera lifecycle soak completed 29 of 29 snapshots over about 30 minutes
with no recorded failure, restart, or out-of-memory event. Two further live
camera checks crossed refresh boundaries while all three image routes continued
returning decodable images.

The September 6 focused restore receipt reports 1,544,722,527 bytes restored and
all seven validation groups passing: restored-content verification, 11 critical
artifact checksums, five SQLite checks, four archive and link safety checks,
structured-file validation, two backup control manifests, and three source-control
manifests. A separate September 10 toolbox receipt confirms an encrypted backup,
a full repository read check, restore verification, and byte comparisons. The
September 10 completion record reports zero failures in the existing home-service
health suite before, during, and after its bounded media-tool validation.

**Scope.** These are dated acceptance results from a private environment, not a
claim of current universal availability or an independently audited service.
The focused restore covers its selected payloads; it is not a full disaster
recovery exercise. A second local device remains exposed to shared building-level
risks. Offsite recovery, independent password safekeeping, a current Windows
system-image restore, and physical acceptance of staged tablet changes were not
established by these receipts. Private deployment details remain unpublished.

**Potential collaboration.** Defined reliability work for a lab or small service
environment: health-check design, application acceptance tests, cautious rollout
and rollback procedures, and restore evidence. A proposed engagement would begin
with a specific service boundary and its own acceptance criteria.

## Vexon IT Field App: a mobile-oriented reference prototype

**The problem.** Field work often means switching between checklists, setup notes,
handoff instructions, and basic business tracking. This prototype groups those
resources in a single browser interface.

**The build.** A static HTML, CSS, and JavaScript app provides tabbed navigation,
quick-access cards, expandable reference drawers, and a copy-to-clipboard action.
Its guide library includes network setup, business email, workgroup setup,
on-site checks, and customer handoff material. A manual tracker adds and removes
entries, sums entered monthly rates, and keeps those entries in the browser's
localStorage. Responsive sizing, safe-area spacing, and fixed navigation support
mobile use.

**What was verified.** Source inspection confirmed the navigation handlers,
guide data, drawer behavior, clipboard call, arithmetic for entered rates, and
localStorage read/write logic. The inspected implementation is a static browser
prototype. This evidence review did not run a browser interaction or accessibility
test; those should be reported separately if completed.

**Scope.** Entered figures are user-supplied planning data, not verified receipts
or proof of customers. localStorage is confined to that browser profile and can
be cleared; it is not a secure multi-user customer database or a backup. The app
has no implemented account authentication, cloud synchronization, billing, or
payment processing. References to third-party setup and billing tools are guide
content rather than integrations. Historical templates and rates are retained
in Git history, not current offers. See [current service scope](service-scope.md).
The prototype should use fictional demo
records until it receives appropriate input handling, security, and operational
review.

**Potential collaboration.** A starting point for a narrowly scoped field guide,
service checklist, or support reference app. Partner work could validate the
actual field workflow, improve accessibility and input handling, and define any
authentication, synchronization, or export requirements before adding them.

## Evidence notes

**October 19, 2026 source update:** the current app replaces historical setup
instructions, sales scripts and rate cards with scoped checklists. It incorporates
the pending tracker input/storage fixes. This does not turn the demo into a
customer system or make business managed care active. The September review below
describes its dated evidence, not current runtime acceptance. See
[release notes](release-2026-10-19.md) for current checks and production gates.

Evidence reviewed on September 11, 2026: the video export and visual-review
records; dated private application-reliability and completion reports; successful
focused-restore and toolbox-recovery receipts; and the field app source. The
private service evidence is summarized here without deployment addresses,
credentials, private machine names, account information, or customer records.
