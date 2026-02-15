---
publishDate: 2026-02-15T00:00:00Z
title: Integration, AI, and the Tollbooth We Keep Rebuilding
excerpt:  We're rebuilding the same pattern that slowed us down last time. The pattern where everything has to pass through one place before it can move.
image: ~/assets/images/the‑tollbooth‑we‑keep‑rebuilding.png
category: Platform Engineering
tags:
  - BTP
  - Cloud Governance
  - AI
  - ESB
  - Clean Core
---

For a long time I did XI and PI. Before that I worked with DCOM, RMI and CORBA. That was the distributed computing era before anyone called it middleware. During that time I did a few engagements for both TIBCO and webMethods. I worked on non SAP systems and spent a lot of time talking to people from other teams. BizTalk, Oracle Fusion, webMethods, Mule. Whoever was on the other side. They saw SAP as an island. Crossing over it meant a toll.

I would map and route. They would pick up, map and route. Sometimes it was nothing more than a bureaucratic firewall. Other times it was translation work, taking the one-size-fits all SAP message and making it acceptable for a non SAP system.

As they moved away from ESB patterns and back to solving things directly in code, using .NET and Spring, I could see the gap widening. I could feel myself falling behind. They were solving complex problems cleanly in code and I was still anchored to the old gravitational centre. It ate at me because I knew the industry had shifted and I had not shifted with it yet.

Where other teams made the shift, the tollbooth became singular. Where they did not, the landscape got more complicated, not less.

The work had stopped being about the business problem. Somewhere along the way I had become institutionalised, more focused on mastering the tool than on what it was meant to enable.

## The ESB Era

PI/PO was a centralised, on-premise ESB, a proprietary stack that sat at the centre of the integration landscape and over time became a destination in its own right. Everything passed through it. That centrality was both its value and its trap.

The complexity of the tooling coupled with proprietary technical constraints meant the skill couldn't realistically sit within a cross-functional team. The cognitive load of operating it was too great to hold alongside a domain problem, which made a dedicated specialist function a practical necessity. Delivery teams had to hand off, wait, and depend on that function. The tool created the bottleneck.

This was the broader pattern of the ESB era. The ESB emerged as a reasonable response to a real problem, integration sprawl. Enterprises were managing systems that spoke different languages, built on different standards, owned by different vendors. SOA promised a canonical data model, one common language across the enterprise. But every vendor had their own version of it. My version rarely talked cleanly to your version. Instead of solving sprawl, enterprises often ended up managing three or more ESBs from competing vendors, each with its own team, its own patterns, its own standards, and its own gravitational pull.

Mediation made complete sense in that world. When systems genuinely spoke different languages, you needed an interpreter. The ESB was that interpreter. The trade-off was centralisation, specialisation, and a new kind of dependency. You solved sprawl by creating a bottleneck.

## Why the Landscape Has Changed

The move to the cloud and concepts like Clean Core change the underlying assumption. It is not just about staying close to standard. It is about decoupling.

Instead of accepting that systems will always speak different languages and layering mediation on top, Clean Core moves toward a shared foundation built on open standards. Because these standards are open, any team, tool or vendor can, in principle, consume them without a translator in the middle.

The canonical data model has been reborn as the One Data Model, visible in the SAP Business Accelerator Hub through thousands of OpenAPI and AsyncAPI definitions, living, executable contracts that we never had before.

As organisations move toward Clean Core, whether brownfield, greenfield or bluefield, the need for mediation begins to change. BTP Cloud Integration plays a role in that journey, but it is not a like-for-like replacement for PI/PO. Treating it as one misses the point. Moving the integration layer without changing the pattern is not modernisation. In greenfield and bluefield projects that choice is clear. In brownfield scenarios mediation will remain for legacy flows that cannot yet conform to the standard, but that should be a specific exception rather than the default position.

Brownfield is not a transition state you pass through on the way to something cleaner. For many enterprises it is the landscape they operate in: IDocs, RFCs, flat files, custom Z logic, vendor adapters that predate the cloud by decades. Some of that legacy will never conform to an API contract.

Where APIs do govern the exchange between systems, the contract becomes the binding agreement between producer and consumer. The API defines what is offered and what is expected. When that contract holds, much of what middleware once existed to do, mapping, transforming, translating, is no longer needed in the same way.

Legacy mediation is about translation and compensation for standards debt. Modern mediation is about coordination, trust, flow control and composability. And some mediation is simply structural. B2B integration runs on EDI, AS2, OFTP and partner-specific formats that will never align to an internal API contract. Async and event-driven patterns need transformation at the boundary between producer and consumer regardless of how clean the underlying systems are. The ESB tried to do all of it from one centralised place. The alternative is not no mediation. It is mediation that is purposeful, applied where it is genuinely needed, and not a bottleneck by design.

## Where CI Fits

CI is where some of that purposeful mediation lives.

CI is built on Apache Camel, which delights a lot of traditional cloud architects. In practice it surfaces as a low-code tool, but Groovy gives you access to the DSL when you need to get closer to the metal. It pushes hard against the ESB label by design. It is a library, a framework for movement, not a centralised authority. Within the Integration Suite, CI is a tool, not a stack. It is one capability among many, not a destination that everything must pass through.

The cognitive load of operating CI is much lower than PI/PO. It's trying to do a lot less and other tools in the Integration Suite and other BTP services can do a lot more of the lifting. The concepts are more transferable. The standards it sits on are open, which means the knowledge travels. It isn't locked inside a proprietary paradigm that only specialists can navigate. If a tool is simple enough to sit within a delivery team without consuming it, cross-functional integration becomes realistic. Teams can hold both the domain problem and the integration capability without one crowding out the other.

## The Blind Spot

Enterprises moved to the cloud for speed. Speed without control is sprawl. Sprawl at cloud scale is harder to untangle than on-premise sprawl.

The ESB was a response to on-premise sprawl. It was slow and centralised, but at least it was legible. You could see the bottleneck. Cloud sprawl is distributed and self-replicating. Every team moves fast in its own direction, and integration debt accumulates silently until something needs to talk to something else and nobody knows how.

The same instinct that built the ESB is already reaching for APIM as a replacement. But visibility is not control. Policy is not governance. A gateway is not a system boundary. Azure APIM is infrastructure. It sits at the perimeter and can genuinely act as a Front Door, with WAF policies applied at that boundary. BTP APIM is a managed service running inside the platform. It observes traffic and applies policies to what passes through it, but it cannot define the boundary, own authorization, or intercept what goes around it. Placing it at the centre of a governance model produces the shape of a tollbooth without the actual gate.

## The Next Wave
AI doesn't just call APIs. It orchestrates long-running intent.

And it authenticates with identity, not topology. An agent holding a user token goes straight to the OData or REST endpoint. It does not need to pass through the integration layer to get there. If governance lives in the middleware and the agent never touches the middleware, that governance is not governance. It is a suggestion.

AI expects systems to talk, context to flow and data to be available. It arrives with protocols like MCP and assumes openness. Enterprise controls still exist, but teams will bypass them to meet AI use cases, creating connectors, point-to-point integrations and bespoke pipelines. Integration no longer enforces order. It becomes a network of raw data flows, expanding faster than governance can keep up.

The enterprise is managing a problem that AI treats as already solved. That gap is where the next wave of sprawl will appear. Five years from now, someone will look at the landscape and wonder how it became so complicated.

The Integration Suite is a capable set of tools. CI, Event Mesh, and APIM each serve distinct roles within that landscape. But none of them were designed for AI workloads. AI agents need to manage state across long-running, unpredictable workflows. They need to decide when to spend tokens, how much context to carry and when to stop. When those workflows fail partway through, they rely on compensation logic to unwind what has already happened, or a durable execution engine to store the process in a replayable state. That is a different kind of problem from the one these tools were built to solve.

If a lift and shift places the Integration Suite at the centre of everything, and that suite is not the right foundation for what AI actually needs, you have not just rebuilt the tollbooth. You have built it in the wrong place for the traffic that is coming. The answer is not a better centralised layer. It is a different kind of foundation.

## Looking Back

Now I'm the one who moved on. I work on CAP, distributed cloud integration, EDA, open patterns. And I find myself looking back at the era the way they once looked back at me.

Not in anger. But with enough distance to see the shape of it clearly. The ESB solved a real problem. PI/PO was a response to genuine chaos. It was a coping mechanism born of complexity. The ESB was not the problem. The problem was what it became, a proprietary, monolithic gatekeeper with its own lock-in, and gravitational pull.

But the conditions have changed. And if we don't carry forward what we learned from that era, not just archive it, we will build it again. It won't be called an ESB. It will be called an AI integration layer, or an intelligent middleware platform, or something that sounds like progress. And it will carry the same weight, create the same dependencies, and produce the same bottlenecks.

The question I keep coming back to is simple. Are we building a foundation, or are we building another tollbooth?

We built walls to manage chaos. The walls became the problem.

AI doesn't care about the walls and will route around them.

### About the Author

**John Patterson** is a Principal Software Engineer at Second Phase Solutions. For 25 years he has installed it, architected it, supported it, and spent a significant part of his career decoupling and simplifying what it became. He has been inside the pattern long enough to recognise when it is forming again.

This isn't a tooling problem. It's a pattern problem. And patterns repeat until someone names them.

If you're building the foundation, not the gate, let's [talk](https://www.linkedin.com/in/johnspatterson/).
