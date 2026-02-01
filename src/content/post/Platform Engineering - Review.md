---
publishDate: 2025-10-14T00:00:00Z
title: Platform Engineering - Review
excerpt:  The book examines why platform adoption often fails to deliver intended business value. Teams struggle with complexity, internal friction, and competing priorities, and big initiatives often burn out before they gain traction. It shows how treating the platform as a product makes delivering intended business value more predictable and easier for teams to adopt
image: ~/assets/images/platform-engineering.png
category: Book Review
tags:
  - Book Review
  - Sytem Design
  - Devops
  - Platform Engineering
---
## Quick Reference

**Format**: Audiobook (O'Reilly)  
**Key Focus**: Treat your platform as a product, developers as the customers  
**Listening Time**: About 8.5 hours at 1.5× speed

I read this because I liked Camille Fournier's other books, [97 Things Every Engineering Manager Should Know](https://www.oreilly.com/library/view/97-things-every/9781492050896/) and [The Manager's Path](https://www.oreilly.com/library/view/the-managers-path/9781491973882/). She is skilled at combining technical and operational excellence with navigating large enterprise bureaucracy and politics. This one did not disappoint.

## Build Better Mousetraps or Catch More Mice

The book surfaces a core friction. DevOps is bottom-up while platform engineering is top-down. A top-down approach focuses on all the ways the platform adds value to the business.

DevOps improves team-level delivery. It automates pipelines and speeds up deployment but does not solve systemic complexity. It is a means to an end, delivering value faster, not delivering the right value. Teams celebrate pipeline efficiency while shipping conflicting things that create friction downstream. Everyone builds the sausage machine. Nobody cares about the sausage.

Platform engineering exists to remove the friction teams face across the organization and provide a clear path through complexity. The goal is not just to speed up delivery but to scale delivery to make it predictable and sustainable. That is why the authors focus on framing the platform as a product, coordinating stakeholders deliberately, and planning work carefully. The platform is not a set of tools to deploy; it is a product designed to help teams do their work effectively.

## Workload Management and KTLO

KTLO, keeping the lights on, is treated as a delivery constraint. It competes with mandates, system improvements, reliability, efficiency, and compliance. This is the kind of work that other disciplines refer to as toil and they often try to reduce so engineers can focus on delivering value. The book recommends capping KTLO at 40 percent of team capacity. Any more and burnout becomes almost unavoidable, leading to retention issues, morale, and customer satisfaction.

For non-KTLO work, the 70/20/10 model is offered. Seventy percent is for core initiatives, incremental work on existing products, including small technical debt pay-down. Twenty percent is for adjacent innovation, such as reworking existing products to improve reliability or scalability, and larger technical debt reduction. Ten percent is for transformational innovation, like introducing new products that support business-critical applications.

## Platform vs DevOps/SRE

| Traditional Approach         | Platform Engineering Approach                           |
| ---------------------------- | ------------------------------------------------------- |
| Focus on velocity and uptime | Treat internal systems as products                      |
| Tooling-first mindset        | Balance agility with planning                           |
| Reactive delivery            | Proactive planning, deliberate stakeholder coordination |
| Immediate fixes              | Deliver incremental value                               |

## Key Insights

- Platform engineering is a product capability, not vendor tooling or a discipline
- Rebuild temptation must be resisted
- Complexity is the root problem, minimize the scope of where complexity can occur
- KTLO must be constrained to protect team capacity
- Don't over-promise, plan regularly and communicate intent and outcomes clearly to gain trust
- Treat stakeholder management as an engineering skill
- Prioritize incremental or evolutionary modernization over greenfield builds
- Align platform work with business outcomes
- Celebrate victories publicly to build momentum and buy-in
## Conclusion

This book offers framing, not recipes. It defends Platform Engineering as a rigorous strategic function and challenges hype, simplification, and unjustified rebuilds.

The authors mandate deliberate stakeholder coordination through Proposal Documents, Wins and Challenges reports, and regular one-on-ones with engineering teams.

If your challenge is the platform itself, with sprawl, uneven adoption, or unclear value, this book is worth reading.