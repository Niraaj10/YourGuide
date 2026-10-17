# Software Requirements Specification (SRS)

**Product (working title):** Creator Trips and AI Trip Planner Platform **Version:** 1.0 (draft) **Date:** 17 October 2026 **Prepared by:** Niraj Alone (tech co-founder)

## 1. Introduction

### 1.1 Purpose

This document specifies the requirements for a web platform where (a) travel content creators publish shareable trip pages with a full itinerary, cost breakdown and bookable slots, (b) travellers book slots and join a trip group, and (c) travellers use an AI trip planner that proposes three itineraries, lets them pick or mix, and saves the result as a personal trip guide.

### 1.2 Scope

The product is India-focused at launch. Version 1 (MVP) covers creator trip pages, slot booking with deposit payments, trip groups and a creator dashboard. The AI planner and saved trip guide follow in Release 2. Mobile apps, offline mode and reviews are later releases.

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
| Traveller | Registered user | Book slots, plan trips with AI, keep a trip guide |
| Creator | Registered and approved host | Publish trips, track bookings and payments |
| Operator | Vetted logistics partner | View trip requirements and confirmed headcount |
| Admin | Platform staff | Approve creators, moderate, handle refunds and disputes |

### 2.3 Operating environment

Modern browsers on mobile and desktop (mobile-first design). Cloud-hosted backend and PostgreSQL database.

### 2.4 Constraints

- Payments must go through a licensed payment gateway; card data is never stored by the platform.
- Tour-operator registration, GST and refund rules must be confirmed with a legal advisor before accepting real money.
- AI output may be inaccurate and must be validated before display.

### 2.5 Assumptions and dependencies

- Creators have an existing audience and share trip links on social media.
- At least one vetted operator is available per launch destination.
- Third-party APIs (payments, maps, LLM) remain available and affordable.

## 3. System Features (Functional Requirements)

Priority: **M** = must (MVP), **S** = should (Release 2), **C** = could (later).

### 3.1 Authentication and accounts

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-AUTH-1 | Users shall register and log in with email/password or Google sign-in | M |
| FR-AUTH-2 | Users shall verify their email address and phone number (OTP) | M |
| FR-AUTH-3 | Users shall have a role: traveller, creator or admin | M |
| FR-AUTH-4 | Users shall be able to reset their password | M |
| FR-AUTH-5 | Users shall be able to edit their profile and delete their account | S |

### 3.2 Creator onboarding

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-CRE-1 | A user shall be able to apply to become a creator, providing profile, social links and follower count | M |
| FR-CRE-2 | Admin shall approve or reject creator applications | M |
| FR-CRE-3 | Creators shall provide payout details, verified by the payment provider | M |
| FR-CRE-4 | Creators shall have a public profile page listing their trips | S |

### 3.3 Trip page builder (creator)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-TRIP-1 | Creators shall create a trip with title, destination, dates, description, cover image and gallery | M |
| FR-TRIP-2 | Creators shall add a day-by-day itinerary with stops (name, location, time, notes) | M |
| FR-TRIP-3 | Creators shall add a cost breakdown (stay, transport, food, activities, platform fee, total per person) | M |
| FR-TRIP-4 | Creators shall set total slots, price per slot, deposit amount and booking deadline | M |
| FR-TRIP-5 | Creators shall define inclusions, exclusions, difficulty, fitness level and safety notes | M |
| FR-TRIP-6 | Creators shall save a trip as draft, preview it, and publish it | M |
| FR-TRIP-7 | Creators shall assign a verified operator to a trip | S |
| FR-TRIP-8 | Creators shall be able to close, cancel or duplicate a trip | S |

### 3.3.1 Public trip page and sharing

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-PAGE-1 | Each published trip shall have a unique public URL | M |
| FR-PAGE-2 | The page shall show itinerary, cost breakdown, creator profile, slots left, and cancellation policy | M |
| FR-PAGE-3 | The page shall generate rich link previews (title, image, price) for social apps and WhatsApp | M |
| FR-PAGE-4 | The page shall show a "Book my slot" button and a live slots-left counter | M |
| FR-PAGE-5 | The page shall load fast on mobile networks | M |
| FR-PAGE-6 | Visitors shall be able to join a waitlist when slots are sold out | S |

### 3.4 Slot booking and payments

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-BOOK-1 | A traveller shall select the number of slots and enter traveller details (name, age, phone, emergency contact) | M |
| FR-BOOK-2 | The system shall reserve slots for a limited time (for example 10 minutes) while the traveller pays | M |
| FR-BOOK-3 | The system shall prevent overbooking, even for simultaneous bookings of the last slot | M |
| FR-BOOK-4 | Travellers shall pay a deposit or the full amount through UPI, cards or net banking via the payment gateway | M |
| FR-BOOK-5 | The system shall confirm a booking only after verified payment (server-side webhook) | M |
| FR-BOOK-6 | The system shall send a confirmation with booking ID and trip details by email and WhatsApp link | M |
| FR-BOOK-7 | Travellers shall be able to pay the remaining balance before a due date | S |
| FR-BOOK-8 | Travellers shall be able to cancel; refunds follow the trip's stated policy | M |
| FR-BOOK-9 | The system shall release unpaid reservations automatically when they expire | M |
| FR-BOOK-10 | The system shall support coupon codes | C |

### 3.5 Creator dashboard

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-DASH-1 | Creators shall see their trips, status, slots sold and revenue | M |
| FR-DASH-2 | Creators shall see the list of confirmed travellers and their details | M |
| FR-DASH-3 | Creators shall message all travellers of a trip | S |
| FR-DASH-4 | Creators shall view payout status and history | M |
| FR-DASH-5 | Creators shall see page views and booking conversion for each trip | S |

### 3.6 Trip group (community)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-COM-1 | Each trip shall have a group for confirmed travellers and the creator | M |
| FR-COM-2 | The group shall provide announcements and a link to an external WhatsApp group | M |
| FR-COM-3 | Travellers shall have a short public traveller profile (name, photo, interests) visible inside the group | S |
| FR-COM-4 | Past travellers shall be notified of the creator's next trip | S |
| FR-COM-5 | Travellers shall be able to follow creators | S |

### 3.7 AI trip planner (traveller)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-AI-1 | A traveller shall enter destination, number of days or dates, budget, group type (solo, friends, family), pace and interests | S |
| FR-AI-2 | The system shall generate **three distinct itineraries** (for example budget, balanced and comfort/offbeat) as structured data | S |
| FR-AI-3 | Each itinerary shall show total estimated cost range, days, pace and highlights for comparison | S |
| FR-AI-4 | The traveller shall be able to select one itinerary as is | S |
| FR-AI-5 | The traveller shall be able to build a custom itinerary by taking days or stops from any of the three | S |
| FR-AI-6 | The traveller shall be able to add, remove, reorder or replace stops and regenerate a single day | S |
| FR-AI-7 | The system shall validate every generated place against a places/maps service and discard or flag unverified ones | S |
| FR-AI-8 | The system shall calculate travel time and distance between consecutive stops | S |
| FR-AI-9 | Costs shall be shown as estimates and ranges, with a note that prices may change | S |
| FR-AI-10 | The results page shall suggest matching creator trips for the destination | S |
| FR-AI-11 | The system shall rate-limit AI requests per user and cache common requests | S |

### 3.8 Trip guide

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-GUIDE-1 | A traveller shall save a chosen or custom itinerary as "My Trip Guide" | S |
| FR-GUIDE-2 | The guide shall show a day-by-day view with map, times, costs and personal notes | S |
| FR-GUIDE-3 | The guide shall be shareable through a link, with the owner controlling visibility | S |
| FR-GUIDE-4 | The guide shall be available offline | C |
| FR-GUIDE-5 | A booked creator trip shall appear automatically in the traveller's guides | S |
| FR-GUIDE-6 | Travellers shall be able to copy a creator's itinerary and customise it | C |

### 3.9 Notifications

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-NOT-1 | The system shall send email for booking confirmation, payment failure, reminders and cancellations | M |
| FR-NOT-2 | The system shall send trip reminders before departure | S |
| FR-NOT-3 | The system shall support WhatsApp or SMS messages | C |

### 3.10 Administration

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-ADM-1 | Admin shall review and approve creators and trips before they go live | M |
| FR-ADM-2 | Admin shall view all bookings, payments and refunds | M |
| FR-ADM-3 | Admin shall issue refunds and resolve disputes | M |
| FR-ADM-4 | Admin shall suspend users or trips and view an audit log | M |
| FR-ADM-5 | Admin shall manage operator records | S |

### 3.11 Reviews (later)

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-REV-1 | Travellers who completed a trip shall be able to rate and review the trip, creator and operator | C |

## 4. External Interface Requirements

### 4.1 User interfaces

Mobile-first responsive web. Main screens: home, trip page, booking checkout, traveller dashboard, trip group, AI planner form, itinerary comparison, itinerary editor, trip guide, creator dashboard, trip builder, admin console.

### 4.2 Third-party interfaces

| Interface | Purpose |
| --- | --- |
| Payment gateway | Collect payments, refunds, webhooks, creator payouts |
| Maps and places API | Validate places, geocoding, distance and travel time |
| LLM provider API | Generate itineraries as structured JSON |
| Email service | Transactional emails |
| Messaging (WhatsApp/SMS) | Reminders and group links |
| Object storage and CDN | Images and static assets |
| Error monitoring | Track failures |

### 4.3 Internal API (summary)

| Method and path | Purpose |
| --- | --- |
| POST /auth/register, /auth/login | Authentication |
| POST /creators/apply | Creator application |
| POST /trips, PUT /trips/:id, POST /trips/:id/publish | Trip management |
| GET /trips/:slug | Public trip page |
| POST /trips/:id/reservations | Reserve slots (creates a hold) |
| POST /bookings/:id/pay | Start payment |
| POST /webhooks/payment | Payment gateway callback |
| POST /bookings/:id/cancel | Cancel booking |
| POST /planner/generate | Generate three itineraries |
| POST /planner/itineraries/:id/mix | Build a custom itinerary |
| POST /guides | Save a trip guide |
| GET /guides/:id | View a guide |

## 5. Data Flow Diagrams

Diagrams for this section are included below the text descriptions.

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

A booking is confirmed only after the payment process verifies the gateway webhook; a confirmed booking then opens the trip group.

## 6. Database Design

### 6.1 Entities and key attributes

| Table | Key columns |
| --- | --- |
| users | id, name, email, phone, password\_hash, role, email\_verified, created\_at |
| creator\_profiles | id, user\_id, handle, bio, social\_links, followers, status, payout\_account\_ref |
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

### 6.3 Booking concurrency rule

Slots remaining equals total\_slots minus confirmed bookings minus active reservations. Reservation creation runs in a database transaction that locks the trip row, rechecks availability and inserts the reservation. A scheduled job expires unpaid reservations.

### 6.4 Booking status lifecycle

A booking moves from Reserved to Pending payment, then to Partially paid (deposit received) or Fully paid. Those two paid states are the Confirmed states. An unpaid hold becomes Expired. A cancelled booking becomes Cancelled, then Refunded under the trip’s policy. A Fully paid booking becomes Completed after the trip.

&#91;embedded content: booking status lifecycle · 9 states\]

Filled boxes are confirmed bookings; every other state means no verified payment yet, or a booking that has ended.

## 7. Non-Functional Requirements

| Category | Requirement |
| --- | --- |
| Performance | Public trip page loads in under 3 seconds on a 4G connection; AI planner shows the first itinerary within about 15 seconds |
| Scalability | Support at least 1,000 concurrent visitors during a creator's launch post without failing bookings |
| Availability | 99.5% uptime target for MVP |
| Security | HTTPS everywhere; hashed passwords; role-based access; server-side payment verification; input validation; rate limiting |
| Privacy | Collect only needed personal data; consent and a privacy policy; compliance with applicable Indian data protection law (confirm with an advisor) |
| Reliability | Payments are idempotent; daily database backups; no booking is lost if a webhook is delayed |
| Usability | Mobile-first; booking in no more than 4 steps; English first, Hindi and Marathi later |
| Accessibility | Readable contrast, keyboard navigation, alt text on images |
| Maintainability | Single repository, automated tests for booking and payments, a staging environment |
| AI safety | Validated JSON output, place verification, estimate labels, logging of prompts and outputs for review |

## 8. Business Rules (to be finalised)

- Cancellation and refund tiers are set per trip and shown before payment.
- The platform fee is a percentage of each booking; the exact rate is to be decided.
- Creators are paid after the trip, or in agreed stages, never before the traveller's cancellation window closes. Final terms to be decided.
- Only approved creators can publish trips; admin approves each trip.
- Every trip must have a vetted operator before the booking deadline.

## 9. Release Plan

| Release | Scope |
| --- | --- |
| R1 (MVP, months 1 to 3) | Auth, creator onboarding, trip builder, public trip page, booking and payment, creator dashboard, basic trip group, admin console, email notifications |
| R2 (months 3 to 6) | AI planner with three itineraries, mix and edit, trip guide, creator profile pages, waitlist, balance payments |
| R3 (later) | Offline guides, reviews, coupons, WhatsApp automation, Hindi and Marathi, mobile app |

## 10. Risks

| Risk | Mitigation |
| --- | --- |
| Traveller loses money because of a bad trip | Vetted operators, insurance, clear refund rules, held payouts |
| AI invents places or costs | Place validation, estimate ranges, review of outputs |
| Overbooking | Transactional slot locking and reservation expiry |
| Too few creators | Start with 5 to 10 hand-picked creators in one niche |
| Regulatory issues | Legal review before taking real payments |
| Higher AI costs | Caching, limits per user, cheaper models for simple steps |

## 11. Open Issues

1. Final product name and domain.
2. Platform fee percentage and payout schedule.
3. Legal registration requirements for selling tour packages.
4. Which payment gateway and which LLM and maps providers to use.
5. Whether travellers can book without creating an account.
