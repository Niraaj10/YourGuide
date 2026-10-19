# Software Requirements Specification (SRS)

**Product (working title):** Creator Trips and AI Trip Planner Platform **Version:** 1.1 (draft) **Date:** 17 October 2026 **Prepared by:** Niraj Alone (tech co-founder)

## 1. Introduction

### 1.1 Purpose

This document specifies the requirements for a web platform where (a) travel content creators publish shareable trip pages with a full itinerary, cost breakdown and bookable slots, (b) travellers request a slot from the creator (through WhatsApp at first, later through in-platform booking, payments and trip groups), and (c) travellers use an AI trip planner that proposes three itineraries, lets them pick or mix, and saves the result as a personal trip guide.

### 1.2 Scope

Release 1 (MVP) is deliberately small. Creators publish a shareable trip page with the itinerary, cost breakdown and slots. Each page has a “Book my slot” button that opens the creator’s WhatsApp chat with a ready-made booking message. Confirmation, payment and traveller communication stay between the creator and the traveller on WhatsApp. Release 2 adds in-platform slot booking with deposit payments, trip groups and a creator dashboard. Release 3 adds the AI trip planner and saved trip guides. Release 4 covers offline guides, reviews, coupons, WhatsApp automation, more languages and mobile apps.

### 1.3 Definitions

| Term | Meaning |
| --- | --- |
| Creator (Host) | A travel content creator who publishes and leads group trips |
| Traveller | A user who books a slot or uses the AI planner |
| Trip | A creator-led group trip with dates, price and a limited number of slots |
| Slot | One bookable seat on a trip |
| Itinerary | A day-by-day plan made of stops |
| Trip Guide | A traveller's saved itinerary with map, costs and notes |
| Operator | A vetted local company that delivers the trip logistics |
| MVP | Minimum viable product |

### 1.4 References

Internal product discussions; payment gateway documentation; applicable Indian laws on travel services, payments and data protection (to be confirmed by a legal advisor).

## 2. Overall Description

### 2.1 Product perspective

A new, standalone web application with a public website, authenticated dashboards and a backend API. It integrates with a payment gateway, a maps/places service, an LLM provider, and email/WhatsApp messaging.

### 2.2 User classes

| User | Description | Key needs |
| --- | --- | --- |
| Visitor | Unregistered person opening a shared trip link | See itinerary, price, slots quickly; trust the page |
| Traveller | Person who requests a slot (no account needed in Release 1; registered from Release 2) | Book slots, plan trips with AI, keep a trip guide |
| Creator | Registered and approved host | Publish trips, track bookings and payments |
| Operator | Vetted logistics partner | View trip requirements and confirmed headcount (Release 2) |
| Admin | Platform staff | Approve creators, moderate, handle refunds and disputes |

### 2.3 Operating environment

Modern browsers on mobile and desktop (mobile-first design). Cloud-hosted backend and PostgreSQL database.

### 2.4 Constraints

- From Release 2, payments must go through a licensed payment gateway; card data is never stored by the platform. In Release 1 the platform takes no payments and creators handle money themselves.
- Tour-operator registration, GST and refund rules must be confirmed with a legal advisor before accepting real money.
- AI output may be inaccurate and must be validated before display.

### 2.5 Assumptions and dependencies

- Creators have an existing audience, share trip links on social media and use WhatsApp to talk to travellers.
- At least one vetted operator is available per launch destination.
- Third-party APIs (payments, maps, LLM) remain available and affordable.

## 3. System Features (Functional Requirements)

Priority shows the release that delivers the requirement: **R1** = Release 1 (MVP), **R2** = Release 2, **R3** = Release 3, **R4** = Release 4 or later (see section 9).

### 3.1 Authentication and accounts

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-AUTH-1 | Creators and admins shall register and log in with email/password or Google sign-in | R1 |
| FR-AUTH-2 | Users shall verify their email address; phone verification by OTP is added in Release 2 | R1 |
| FR-AUTH-3 | Users shall have a role: creator or admin in Release 1, and traveller from Release 2 | R1 |
| FR-AUTH-4 | Users shall be able to reset their password | R1 |
| FR-AUTH-5 | In Release 1, visitors shall be able to view trip pages and request a slot without creating an account | R1 |
| FR-AUTH-6 | Travellers shall be able to create an account, edit their profile and delete their account | R2 |

### 3.2 Creator onboarding

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-CRE-1 | A user shall be able to apply to become a creator, providing profile, social links, follower count and the WhatsApp number travellers should contact | R1 |
| FR-CRE-2 | Admin shall approve or reject creator applications | R1 |
| FR-CRE-3 | Creators shall provide payout details, verified by the payment provider | R2 |
| FR-CRE-4 | Creators shall have a public profile page listing their trips | R3 |

### 3.3 Trip page builder (creator)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-TRIP-1 | Creators shall create a trip with title, destination, dates, description, cover image and gallery | R1 |
| FR-TRIP-2 | Creators shall add a day-by-day itinerary with stops (name, location, time, notes) | R1 |
| FR-TRIP-3 | Creators shall add a cost breakdown (stay, transport, food, activities, total per person) | R1 |
| FR-TRIP-4 | Creators shall set total slots, price per slot and booking deadline, and update the slots left by hand | R1 |
| FR-TRIP-5 | Creators shall define inclusions, exclusions, difficulty, fitness level, safety notes and their own booking and cancellation terms | R1 |
| FR-TRIP-6 | Creators shall save a trip as draft, preview it, and publish it | R1 |
| FR-TRIP-7 | Creators shall close a trip, mark it sold out or duplicate it | R1 |
| FR-TRIP-8 | Creators shall set a deposit amount per slot and a platform fee line in the cost breakdown | R2 |
| FR-TRIP-9 | Creators shall assign a verified operator to a trip | R2 |
| FR-TRIP-10 | Creators shall cancel a trip, which triggers refunds to booked travellers | R2 |

### 3.3.1 Public trip page and sharing

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-PAGE-1 | Each published trip shall have a unique public URL | R1 |
| FR-PAGE-2 | The page shall show itinerary, cost breakdown, creator profile, slots left (as set by the creator) and the creator’s booking and cancellation terms | R1 |
| FR-PAGE-3 | The page shall generate rich link previews (title, image, price) for social apps and WhatsApp | R1 |
| FR-PAGE-4 | The page shall show a prominent “Book my slot” button, or a “Sold out” label when slots left is zero | R1 |
| FR-PAGE-5 | The page shall load fast on mobile networks | R1 |
| FR-PAGE-6 | Visitors shall be able to join a waitlist when slots are sold out | R2 |

### 3.3.2 WhatsApp booking request (Release 1)

In Release 1 the “Book my slot” button does not book anything on the platform. It hands the visitor to the creator on WhatsApp, and the creator confirms the slot and takes payment there.

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-WA-1 | Tapping “Book my slot” shall open a WhatsApp chat with the creator’s number, using a click-to-chat link (wa.me) on mobile and WhatsApp Web on desktop | R1 |
| FR-WA-2 | The chat shall open with a ready-to-send message, for example: “Hi, I’d like to confirm my booking slot for \[trip name\], \[dates\]. Slots needed: 1.” | R1 |
| FR-WA-3 | The message shall include the trip name, dates and the trip page link so the creator knows which trip it is about | R1 |
| FR-WA-4 | The visitor shall be able to edit the message before sending it; the platform neither sees nor sends the message | R1 |
| FR-WA-5 | Before redirecting, the page shall tell the visitor they are leaving the platform to talk to the creator directly, and that the creator handles confirmation and payment | R1 |
| FR-WA-6 | The creator’s WhatsApp number shall be stored securely and used only to build the link | R1 |
| FR-WA-7 | The system shall count page views and button clicks per trip and show them to the creator | R1 |
| FR-WA-8 | When the creator sets slots left to zero or closes the trip, the button shall be replaced by a “Sold out” label | R1 |

### 3.4 Slot booking and payments (Release 2)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-BOOK-1 | A traveller shall select the number of slots and enter traveller details (name, age, phone, emergency contact) | R2 |
| FR-BOOK-2 | The system shall reserve slots for a limited time (for example 10 minutes) while the traveller pays | R2 |
| FR-BOOK-3 | The system shall prevent overbooking, even for simultaneous bookings of the last slot | R2 |
| FR-BOOK-4 | Travellers shall pay a deposit or the full amount through UPI, cards or net banking via the payment gateway | R2 |
| FR-BOOK-5 | The system shall confirm a booking only after verified payment (server-side webhook) | R2 |
| FR-BOOK-6 | The system shall send a confirmation with booking ID and trip details by email and WhatsApp link | R2 |
| FR-BOOK-7 | Travellers shall be able to pay the remaining balance before a due date | R2 |
| FR-BOOK-8 | Travellers shall be able to cancel; refunds follow the trip’s stated policy | R2 |
| FR-BOOK-9 | The system shall release unpaid reservations automatically when they expire | R2 |
| FR-BOOK-10 | The system shall support coupon codes | R4 |

### 3.5 Creator dashboard (simple version in Release 1, full version in Release 2)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-DASH-1 | Creators shall see their trips and each trip’s status (draft, published, sold out, closed) | R1 |
| FR-DASH-2 | Creators shall see page views and “Book my slot” clicks per trip | R1 |
| FR-DASH-3 | Creators shall see slots sold and revenue per trip | R2 |
| FR-DASH-4 | Creators shall see the list of confirmed travellers and their details | R2 |
| FR-DASH-5 | Creators shall message all travellers of a trip | R2 |
| FR-DASH-6 | Creators shall view payout status and history | R2 |
| FR-DASH-7 | Creators shall see conversion from page view to confirmed booking | R2 |

### 3.6 Trip group (community) (Release 2)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-COM-1 | Each trip shall have a group for confirmed travellers and the creator | R2 |
| FR-COM-2 | The group shall provide announcements and a link to an external WhatsApp group | R2 |
| FR-COM-3 | Travellers shall have a short public traveller profile (name, photo, interests) visible inside the group | R3 |
| FR-COM-4 | Past travellers shall be notified of the creator’s next trip | R3 |
| FR-COM-5 | Travellers shall be able to follow creators | R3 |

### 3.7 AI trip planner (traveller) (Release 3)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-AI-1 | A traveller shall enter destination, number of days or dates, budget, group type (solo, friends, family), pace and interests | R3 |
| FR-AI-2 | The system shall generate **three distinct itineraries** (for example budget, balanced and comfort/offbeat) as structured data | R3 |
| FR-AI-3 | Each itinerary shall show total estimated cost range, days, pace and highlights for comparison | R3 |
| FR-AI-4 | The traveller shall be able to select one itinerary as is | R3 |
| FR-AI-5 | The traveller shall be able to build a custom itinerary by taking days or stops from any of the three | R3 |
| FR-AI-6 | The traveller shall be able to add, remove, reorder or replace stops and regenerate a single day | R3 |
| FR-AI-7 | The system shall validate every generated place against a places/maps service and discard or flag unverified ones | R3 |
| FR-AI-8 | The system shall calculate travel time and distance between consecutive stops | R3 |
| FR-AI-9 | Costs shall be shown as estimates and ranges, with a note that prices may change | R3 |
| FR-AI-10 | The results page shall suggest matching creator trips for the destination | R3 |
| FR-AI-11 | The system shall rate-limit AI requests per user and cache common requests | R3 |

### 3.8 Trip guide (Release 3)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-GUIDE-1 | A traveller shall save a chosen or custom itinerary as “My Trip Guide” | R3 |
| FR-GUIDE-2 | The guide shall show a day-by-day view with map, times, costs and personal notes | R3 |
| FR-GUIDE-3 | The guide shall be shareable through a link, with the owner controlling visibility | R3 |
| FR-GUIDE-4 | The guide shall be available offline | R4 |
| FR-GUIDE-5 | A booked creator trip shall appear automatically in the traveller’s guides | R3 |
| FR-GUIDE-6 | Travellers shall be able to copy a creator’s itinerary and customise it | R4 |

### 3.9 Notifications (Release 1 and 2)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-NOT-1 | The system shall email creators when their application or a trip is approved or rejected | R1 |
| FR-NOT-2 | The system shall email travellers for booking confirmation, payment failure, reminders and cancellations | R2 |
| FR-NOT-3 | The system shall send trip reminders before departure | R2 |
| FR-NOT-4 | The system shall support WhatsApp or SMS messages | R4 |

### 3.10 Administration

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-ADM-1 | Admin shall review and approve creators and trips before they go live | R1 |
| FR-ADM-2 | Admin shall suspend users or trips and view an audit log | R1 |
| FR-ADM-3 | Admin shall view all bookings, payments and refunds | R2 |
| FR-ADM-4 | Admin shall issue refunds and resolve disputes | R2 |
| FR-ADM-5 | Admin shall manage operator records | R2 |

### 3.11 Reviews (Release 4)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-REV-1 | Travellers who completed a trip shall be able to rate and review the trip, creator and operator | R4 |

## 4. External Interface Requirements

### 4.1 User interfaces

Mobile-first responsive web. Release 1 screens: home, trip page with the “Book my slot” button, creator signup, trip builder, simple creator dashboard (trips, views, clicks) and admin console. Release 2 adds booking checkout, traveller dashboard, trip group and the full creator dashboard. Release 3 adds the AI planner form, itinerary comparison, itinerary editor and trip guide.

### 4.2 Third-party interfaces

| Interface | Purpose |
| --- | --- |
| Payment gateway | Release 2: collect payments, refunds, webhooks, creator payouts |
| Maps and places API | Release 3: validate places, geocoding, distance and travel time |
| LLM provider API | Release 3: generate itineraries as structured JSON |
| Email service | Transactional emails |
| Messaging (WhatsApp/SMS) | Release 1: click-to-chat (wa.me) link for slot requests. Release 2: reminders and group links |
| Object storage and CDN | Images and static assets |
| Error monitoring | Track failures |

### 4.3 Internal API (summary)

| Method and path | Purpose | Release |
| --- | --- | --- |
| POST /auth/register, /auth/login | Authentication | R1 |
| POST /creators/apply | Creator application | R1 |
| POST /trips, PUT /trips/:id, POST /trips/:id/publish | Trip management | R1 |
| GET /trips/:slug | Public trip page | R1 |
| POST /trips/:id/events | Record a page view or a WhatsApp button click | R1 |
| POST /trips/:id/reservations | Reserve slots (creates a hold) | R2 |
| POST /bookings/:id/pay | Start payment | R2 |
| POST /webhooks/payment | Payment gateway callback | R2 |
| POST /bookings/:id/cancel | Cancel booking | R2 |
| POST /planner/generate | Generate three itineraries | R3 |
| POST /planner/itineraries/:id/mix | Build a custom itinerary | R3 |
| POST /guides | Save a trip guide | R3 |
| GET /guides/:id | View a guide | R3 |

## 5. Data Flow Diagrams

Diagrams for this section are included below the text descriptions. The first two diagrams show the full system (Release 2 and 3). Section 5.3 shows the smaller Release 1 flow.

### 5.1 Context (Level 0)

External entities: Visitor, Traveller, Creator, Operator, Admin, Payment Gateway, Maps/Places API, LLM Provider, Email/Messaging service.

The platform receives trip details from creators, booking and planner requests from travellers, and approvals from admin. It sends confirmations, reminders and booking lists, calls the payment gateway for payments and refunds, calls the maps API to validate places, and calls the LLM provider to generate itineraries.

&#91;embedded content: context diagram (Level 0) · 4 user groups, 4 outside services\]

Arrows run both ways: users send requests and receive results, and the outside services answer the platform’s calls.

### 5.2 Level 1 processes

| No. | Process | Inputs | Outputs | Data stores |
| --- | --- | --- | --- | --- |
| P1 | Manage accounts | Registration and login data | Sessions, profiles | Users |
| P2 | Manage trips | Trip, itinerary, costs, slots | Published trip pages | Trips, Itineraries, Slots |
| P3 | Handle bookings | Slot selection, traveller details | Reservation, booking | Bookings, Slots |
| P4 | Process payments | Payment request, gateway webhook | Payment status, refunds | Payments |
| P5 | Plan with AI | Preferences | Three itineraries | Itineraries, Place cache |
| P6 | Manage trip guides | Selected or mixed itinerary | Saved guide | Guides, Itineraries |
| P7 | Run trip groups | Confirmed bookings, messages | Group, announcements | Groups, Messages |
| P8 | Send notifications | Events from other processes | Emails and messages | Notifications |
| P9 | Administer platform | Approvals, disputes | Decisions, audit records | Audit log |

&#91;embedded content: Level 1 data flow diagram · 9 processes and their data stores\]

A booking is confirmed only after the payment process verifies the gateway webhook; a confirmed booking then opens the trip group. In Release 1 only P1, P2 and P9 run, with a few emails from P8; P3 to P7 arrive in Release 2 and 3.

### 5.3 Release 1 flow (WhatsApp booking request)

In Release 1 only the trip page and the click-to-chat handoff run on the platform. Confirmation, payment and the slot count are handled by the creator.

&#91;embedded content: Release 1 flow · trip page to WhatsApp booking request\]

The dashed box is the only data the platform records about a booking request: a page view or a button click. It does not see the WhatsApp conversation.

## 6. Database Design

### 6.1 Entities and key attributes

| Table | Key columns |
| --- | --- |
| users | id, name, email, phone, password\_hash, role, email\_verified, created\_at |
| creator\_profiles | id, user\_id, handle, bio, social\_links, whatsapp\_number, followers, status, payout\_account\_ref |
| operators | id, name, contact, regions, verified |
| trips | id, creator\_id, operator\_id, slug, title, destination, start\_date, end\_date, description, price\_per\_slot, deposit\_amount, total\_slots, booking\_deadline, cancellation\_policy, status |
| trip\_media | id, trip\_id, url, type, position |
| trip\_costs | id, trip\_id, category, amount, notes |
| itineraries | id, owner\_user\_id, trip\_id (nullable), source (ai, creator, custom), style, destination, days\_count, total\_cost\_min, total\_cost\_max |
| itinerary\_days | id, itinerary\_id, day\_number, title, notes |
| stops | id, day\_id, place\_id, name, lat, lng, start\_time, duration\_min, cost\_estimate, notes, position |
| places | id, external\_place\_id, name, lat, lng, category, verified\_at |
| reservations | id, trip\_id, user\_id, slots\_count, expires\_at, status |
| bookings | id, trip\_id, user\_id, slots\_count, total\_amount, amount\_paid, status, created\_at |
| booking\_travellers | id, booking\_id, name, age, phone, emergency\_contact |
| payments | id, booking\_id, gateway\_ref, amount, type (deposit, balance, refund), status, created\_at |
| trip\_groups | id, trip\_id, whatsapp\_link |
| group\_members | id, group\_id, user\_id, role |
| group\_messages | id, group\_id, user\_id, body, created\_at |
| guides | id, user\_id, itinerary\_id, title, visibility, share\_token |
| planner\_requests | id, user\_id, preferences\_json, status, created\_at |
| notifications | id, user\_id, type, channel, status, sent\_at |
| audit\_log | id, actor\_id, action, entity, entity\_id, created\_at |

Release 1 uses only these tables: users, creator\_profiles, trips, trip\_media, trip\_costs, itineraries, itinerary\_days, stops, audit\_log and one small extra table, trip\_events (id, trip\_id, type: view or whatsapp\_click, created\_at), which counts page views and button clicks. The other tables arrive in Release 2 and 3.

### 6.2 Relationships

- A user has one optional creator profile.
- A creator has many trips; a trip belongs to one creator and optionally one operator.
- A trip has many media, cost items, reservations, bookings and one trip group.
- An itinerary has many days; a day has many stops; each stop may point to a place.
- A trip may reference one creator itinerary; a traveller's guide references one itinerary.
- A booking belongs to one trip and one user, has many travellers and many payments.
- A planner request produces three itineraries.

&#91;embedded content: ER diagram 1 · trips, bookings and payments\]

Arrows run from a parent table to the table that holds its foreign key. Users also own reservations, which is not drawn.

&#91;embedded content: ER diagram 2 · itineraries, AI planner and guides\]

Each itinerary also records its owner in users, which is not drawn. A creator trip links to one itinerary through trip\_id.

### 6.3 Booking concurrency rule (Release 2)

In Release 1 the creator sets slots left by hand. From Release 2, slots remaining equals total\_slots minus confirmed bookings minus active reservations. Reservation creation runs in a database transaction that locks the trip row, rechecks availability and inserts the reservation. A scheduled job expires unpaid reservations.

### 6.4 Booking status lifecycle (Release 2)

A booking moves from Reserved to Pending payment, then to Partially paid (deposit received) or Fully paid. Those two paid states are the Confirmed states. An unpaid hold becomes Expired. A cancelled booking becomes Cancelled, then Refunded under the trip’s policy. A Fully paid booking becomes Completed after the trip.

&#91;embedded content: booking status lifecycle · 9 states\]

Filled boxes are confirmed bookings; every other state means no verified payment yet, or a booking that has ended.

## 7. Non-Functional Requirements

| Category | Requirement |
| --- | --- |
| Performance | Public trip page loads in under 3 seconds on a 4G connection; AI planner shows the first itinerary within about 15 seconds |
| Scalability | Support at least 1,000 concurrent visitors during a creator's launch post without failing page loads or the WhatsApp redirect (and, from Release 2, bookings) |
| Availability | 99.5% uptime target for MVP |
| Security | HTTPS everywhere; hashed passwords; role-based access; server-side payment verification (Release 2); input validation; rate limiting |
| Privacy | Collect only needed personal data; creators agree that their WhatsApp number is visible to anyone who taps the booking button; consent and a privacy policy; compliance with applicable Indian data protection law (confirm with an advisor) |
| Reliability | From Release 2, payments are idempotent; daily database backups; no booking is lost if a webhook is delayed |
| Usability | Mobile-first; booking in no more than 4 steps; English first, Hindi and Marathi later |
| Accessibility | Readable contrast, keyboard navigation, alt text on images |
| Maintainability | Single repository, automated tests for booking and payments, a staging environment |
| AI safety | Validated JSON output, place verification, estimate labels, logging of prompts and outputs for review |

## 8. Business Rules (to be finalised)

- In Release 1 the creator writes the booking and cancellation terms on the trip page and handles any refund directly. From Release 2, cancellation and refund tiers are set per trip and shown before payment.
- There is no platform fee in Release 1. From Release 2, the platform fee is a percentage of each booking; the exact rate is to be decided.
- From Release 2, creators are paid after the trip, or in agreed stages, never before the traveller's cancellation window closes. Final terms to be decided.
- Only approved creators can publish trips; admin approves each trip. In Release 1, “Book my slot” only opens a WhatsApp chat: the platform does not confirm bookings, hold money or guarantee a slot.
- From Release 2, every trip must have a vetted operator before the booking deadline.

## 9. Release Plan

| Release | Scope |
| --- | --- |
| R1 (MVP, months 1 to 3) | Creator signup and approval, trip page builder, public trip page with share previews, “Book my slot” button that opens the creator’s WhatsApp with a ready message, simple creator dashboard (trips, slots left, page views, button clicks), admin console, approval emails |
| R2 (months 3 to 6) | In-platform slot booking with deposit payments, trip groups, full creator dashboard (travellers, revenue, payouts), traveller accounts, notifications, balance payments, refunds, waitlist |
| R3 (after Release 2) | AI planner with three itineraries, mix and edit, saved trip guides, creator profile pages, community features (follow creators, past travellers) |
| R4 (later) | Offline guides, reviews, coupons, WhatsApp automation, Hindi and Marathi, mobile app |

## 10. Risks

| Risk | Mitigation |
| --- | --- |
| Bookings and money move outside the platform in Release 1, so there is no record and no protection | Show a clear notice before the WhatsApp redirect, count clicks, and move to in-platform booking in Release 2 |
| Traveller loses money because of a bad trip | Release 1: approve creators before they publish and state on the page that the creator is responsible. Release 2: vetted operators, insurance, clear refund rules, held payouts |
| The creator’s WhatsApp number is visible to anyone who taps the button | Creators agree to this at signup and can use a separate business number |
| Creators reply slowly or forget to update slots left | Reminder emails, a one-tap sold-out toggle, and a “last updated” time on the page |
| Spam or fake enquiries to creators | Rate-limit the button and let creators report abusive visitors |
| Overbooking | Release 1: the creator tracks slots by hand. Release 2: transactional slot locking and reservation expiry |
| Too few creators | Start with 5 to 10 hand-picked creators in one niche |
| Regulatory issues | Legal review before taking real payments in Release 2 |
| AI invents places or costs (Release 3) | Place validation, estimate ranges, review of outputs |
| Higher AI costs (Release 3) | Caching, limits per user, cheaper models for simple steps |

## 11. Open Issues

1. Final product name and domain.
2. Platform fee percentage and payout schedule (from Release 2).
3. Legal registration requirements for selling tour packages.
4. Which payment gateway and which LLM and maps providers to use.
5. Whether travellers can book without creating an account in Release 2.
6. The exact wording of the prefilled WhatsApp message, and whether each creator should use a separate WhatsApp Business number.
