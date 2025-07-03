---
publishDate: 2025-2-26T00:00:00Z
title: The Seven Reasons Your SAP Tech Initiatives Are Failing
excerpt: A hard look at why SAP initiatives miss the mark - from misguided goals to poor planning. Based on real examples of teams struggling with cloud adoption, legacy practices, and operational gaps.
image: ~/assets/images/7-reasons-tech-fail.png
category: Cloud Development
tags:
  - SAP CAP
  - DevOps
  - BTP
---
## Introduction
Right now, SAP customers are busy putting together business cases to move their on-premise ERP systems to the cloud via SAP RISE. But while initiatives like 'Clean Core' aim to address the mountains of technical debt, we're often missing the point by not asking how we got there in the first place.

In this article, I will share my firsthand experiences of being parachuted in to help teams treading water in their SAP Business Technology Platform (BTP) initiatives. We'll explore why these initiatives sometimes fail to meet expectations and provide practical insights to address legacy issues, operational inefficiencies, and enhance collaboration.
## TL;DR
The seven issues reveal a common thread: organizations adopt new SAP technologies but maintain old operational approaches. Unclear goals lead to technical showcases without measurable benefits, which become templates for future work. Titles change, but practices stay the same, neglecting necessary skills. Consultants develop solutions in isolation, and architects provide impractical diagrams. Non-functional requirements are afterthoughts, and support teams lack operational knowledge. The "good enough" approach ignores evolving technology. To truly move forward and avoid repeating legacy issues, organizations need to embrace change and adapt their practices to fully leverage new technologies.
## 1. Unclear Goals and Misaligned Priorities
History repeats itself in the SAP world. With Fiori, we started with the best intentions, eager to showcase sleek UIs that promised to modernize the user experience. However, instead of focusing on simple, high-impact scenarios, we often chose overly complex processes to demonstrate the technology’s full potential. The result? Impressive demos that were difficult to scale and replicate.

Now, with RISE, teams are migrating to the cloud but clinging to old development practices. I hear stories of developers taking the scenic route and building Fiori apps using SAPUI5 techniques from 2015, completely bypassing modern approaches like RAP (RESTful Application Programming Model). Instead of a clean paved road to the future, it feels like we're walking on a cobbled path full of outdated practices and missed opportunities.

In BTP, it’s groundhog day. We start by building a showcase app, packing it with every service available because free credits make it easy to experiment. The goal is to demonstrate what’s possible with BTP, but these apps quickly become "kitchen sink" solutions—overly complex and driven by technical curiosity rather than actual business needs.

The business sees these showcase apps and gets excited. They don’t care about the underlying technology—they just want solutions that work. Suddenly, there’s pressure to deliver more apps like the first one. Here’s the rub: that initial app took months to build by our best team while they were still learning. Now we’re expected to deliver similar results faster, with teams that are less experienced and still finding their footing.

That first app, built as an experiment, unintentionally becomes the template for future development. As more apps go into production, we face challenges: misalignment with the original vision, knowledge gaps within the team, and rapid onboarding that fails to address existing skills deficits and poor practices. Teams are expected to learn on the job but end up emulating outdated methods or bad practices around them. Designers remain stuck in transactional thinking, leading to solutions that lack agility. Consequently, support teams struggle to manage increasingly complex systems, resulting in higher costs and slow progress.

Meanwhile, our priorities drift. We get caught up in creating impressive demos and lose sight of core business drivers like delivering value to the business quicker, enabling better decision-making, aligning with business goals, and reducing costs. Those early technical decisions—made when everything felt hypothetical—end up shaping our future solutions in ways we didn’t expect.

Initiatives often begin with grand visions of benefits but lack clear ways to measure success. Teams struggle to translate these visions into measurable outcomes, leaving us without a way to assess whether we’re truly delivering value or just spinning our wheels.

Then there’s the cloud bill. As apps go live and usage scales up, service costs start rolling in—costs nobody planned for or accounted for upfront. Security considerations and scaling patterns become afterthoughts in a system that’s growing more expensive and harder to manage daily.

From where I stand in the trenches, it feels like we're going over the top without a clear battle plan. The direction might seem obvious at a high level, but down here in the trenches, it's chaos. We're so focused on what technology can do that we've lost sight of how it should serve the business. This misalignment often leads to challenges in adapting our development practices to new environments.

>If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions. – Albert Einstein

## 2. Clinging to ABAP Patterns in a Cloud World 
As we transition to the cloud, I've observed a curious phenomenon. Teams are renamed —the BASIS team becomes the "Platform Team," the Process Integration team transforms into the "Cloud Integration Team." Yet beneath these new labels, old habits persist.

The real challenge emerges when something fails in production. You can't simply set breakpoints and debug step by step as you would in ABAP. These are managed services running elsewhere—you need logs, traces, and metrics. It's not a monolith where problems and solutions are handed to you.

Organizations eagerly adopt new agile tools and DevOps platforms, often mistaking the purchase for progress. But these tools are just proxies for deeper change. "Agile" and "DevOps" are adjectives describing how we're supposed to work, not convenient labels to rebadge what we did before. The real transformation happens in our teams and processes. Without changing our fundamental approach and mindset, we're just putting new names on old behaviours.

But here's where the disconnect becomes apparent: I've seen developers still submitting tickets for Git repositories. I've heard teams boast, "We don't allow developers access to test environments"—as if we're still in the ABAP world. Even more telling, I often hear the familiar refrain: "We still can't get real data copied back to development." These practices, holdovers from an on-premise mindset, clash with the self-service nature and data management capabilities of cloud environments.

In the trenches, culture isn't just a tagline or inspiring words you put on the wall—it's what we do every day. To quote Zuck, "move fast and don't break things." But in our world, we're so focused on the old rituals of "don't break" that we've forgotten how to move at all. We're caught between the need for standardization and the push for innovation, often leaning too heavily on governance that stifles rather than enables. This isn't about following a cloud roadmap or adopting the latest DevOps tool; it's about changing how we think and work—every single day. Until we find that balance and truly transform our approach, we're just pouring new wine into old bottles.

>Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime. – Maimonides
## 3. Over-reliance on Consultants
When organizations rely heavily on consultants, several challenges can arise. One primary issue is vendor lock-in, where consulting firms deliver complex systems that only they can fully understand or maintain. This dependency results in the organization being tied to the consultant for ongoing support, future enhancements, or fixes.

Ensuring proper knowledge transfer is crucial. If consultants build solutions without involving internal teams from the start, those teams often lack the skills to maintain or extend the systems once the consultants leave. This can happen for several reasons: internal teams might not have been involved early enough, they might not have had the required skills, or the handover process might have been rushed. Consequently, when consultants depart, the knowledge they brought goes with them, leaving internal teams struggling to manage the solutions.

Ironically, the skills organizations seek from consultants often already exist within the enterprise, just in different teams. There’s a missed opportunity to leverage internal expertise and foster cross-team collaboration. For example, the team next to you might have extensive experience with AWS and or Azure, making it quicker and more cost-effective to ask for their help instead of hiring expensive consultants with proprietary tools.

I've seen firsthand where the same system integrator was involved in both the build and support phases, yet the support team still reported lacking the necessary skills to maintain the system effectively. This highlights a critical gap in knowledge transfer and skill development, even within the same consulting firm.

With cloud technologies in high demand, it's difficult to retain top talent. Opportunities for skilled professionals are abundant, so it's essential to clearly define what skills and outcomes are needed. The goal should be to use consultants in a way that enhances internal capabilities, not replaces them. This means identifying which skills are crucial to develop in-house and which can be sourced externally. When engaging consultants, the focus should be on knowledge transfer and skill development, ensuring that internal teams can learn from the experience and maintain solutions independently.

The issue is that we often focus on solving immediate problems without building our internal capabilities. This oversight leads to a cycle of dependence on external expertise, which can hinder our ability to handle future challenges independently.

> Insanity is doing the same thing over and over again and expecting different results. – Albert Einstein
## 4. Effective Delivery: Practical Governance is Key
Many architecture teams rely on high-level vendor guidance, such as reference architectures, frameworks, and best practices. While helpful, these often lack actionable steps, leaving developers without clear, executable processes for their specific environment. This gap between high-level guidance and practical implementation is a key issue to identify.

The challenges become evident in several ways. Onboarding delays are a common problem, where new team members or consultants spend days asking basic questions about processes and tools. Developers also struggle with inconsistent practices, such as environment access, Git setup, and understanding security policies. Without clear guidelines, developers waste time speculating about best approaches, leading to rework and delays. Additionally, cloud practices are constantly evolving. What was a cutting-edge feature in your last project might now be a standard practice or even outdated. Clear guidance helps teams stay current with these changes. Without it, developers might miss out on new, more efficient ways of working or stick to older methods that no longer fit best practices. Keeping up with this evolution is key to making the most of the platform's capabilities.

The goal is to eliminate waste in the software development process and create a framework that makes the right choices the easiest ones to make. By establishing clear, measurable outcomes—such as reduced onboarding time, decreased code errors, and faster project completion—organizations can quantify the benefits of addressing these governance gaps. Reducing cognitive load ensures it's easy to do the right thing and hard to do the wrong thing, helping developers get productive from day 1.

These issues point to a fundamental problem: the lack of a "golden path" in platform governance. Golden paths, or as SAP internally refers to them, "paved roads," are standardized patterns designed to make code consistent and maintainable. They specify which frameworks to use, when to use which services, and what dependencies can be included as examples. By identifying these pain points, organizations can focus on creating structured guidelines that streamline workflows and foster consistency. These guidelines empower developers to make the right decisions with minimal friction, reducing complexity in managing the development lifecycle. They provide practical, actionable steps for developers, offering clear instructions for tasks like onboarding, setting up Git, deploying code, and maintaining security practices. This approach ensures that from day 0 to day 2, new hires have a comprehensive framework that guides them from creation to deployment and support, ultimately achieving the measurable outcomes desired.

> It's not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. – Charles Darwin
## 5.  Non-Functionals: The Silent Killer
In the on-premise world, SAP ERP systems relied on decades of proven practices and robust infrastructure. Security, scalability, and performance were well-understood and managed by experienced teams. We stood on the shoulders of giants. Now, with workloads moving to the cloud, it's like diving without a net.

In cloud environments, teams must design and implement all non-functional requirements from security and scalability to maintainability and monitoring. These aren't inherited from existing infrastructure as they were on-premise. Failing to integrate these requirements from the start leads to significant remediation costs later. Security, scalability, and observability should be integrated from the beginning.

Consider a work order, leave request, or timesheet application. It works fine for 1,000 users, but when the business scales to 10,000 users, the application starts failing during peak usage. As the plan to scale to 30,000 users progresses, the app struggles to meet the increased demand, causing frequent outages and user frustration. Without scalability in mind from the start, the cost of addressing the problem becomes significantly higher, resulting in delays, increased support costs, and the need for more extensive remediation.

Security can’t be an afterthought. Often, it's not prioritized early, leading to serious consequences. Vulnerabilities, such as security holes in outdated dependencies or hardcoded secrets, are often uncovered during a security audit—or worse, when it's too late. Remediation is costly, and customer trust is damaged. Early focus on security is crucial to prevent these issues.

Similarly, observability is essential in the cloud. If it’s not baked into the application from the start, adding it ad hoc becomes expensive and ineffective. When an outage occurs, poor observability tools make it harder to pinpoint the root cause quickly, leading to prolonged downtime and eroded trust from both internal teams and customers. Neglecting these 'ilities' costs more—both in risk and financial impact.

Each missing non-functional requirement becomes a separate remediation project, requiring additional budget, development time, and system changes.

## 6. Failing to Build Cloud-Native Operations
First thing in the morning, during your standup, you notice a spike in ServiceNow tickets reporting users can't do their jobs. Oddly, the system has already self-repaired. Weeks go by, and the issue persists, escalating to the point where the business owner demands a priority fix. It's only when we implement observability that correlates logs and traces between services that we identify the cause: a race condition. A scheduled job to create a materialized view was meant to finish before users started work but was overrunning, causing users and the job to compete for the same resources, leading to crashes.

In many projects, the lack of clear ownership often leads to confusion and delays in resolving issues. For example, a replicated table in HANA Cloud failed to update due to an issue with SAP Data Services because the user account responsible for running the job had expired. This led to data corruption, with teams unsure whether it was an operations issue, an SAP functional issue, or an administrative issue. This highlighted the need for clearly defined roles and accountability in managing cloud incidents.

Communication gaps between development, operations, and support teams can create significant issues when changes are introduced. For instance, a routine clean-up of Okta groups was not communicated properly, resulting in business users losing access to critical applications in production, causing significant disruptions and delays.

Every team has a story like this: There's one key engineer who knows everything about the system. He has all the solutions bookmarked and noted down in personal files. However, when he was on an extended vacation over Christmas break, a critical issue arose that no one else could fix. The team struggled to find the right information, and the lack of proper documentation and runbooks meant they couldn't resolve the problem quickly. It wasn't until the engineer returned that they could finally fix the issue. This highlighted the need for better documentation and shared knowledge to avoid delays.

> Continuous improvement is better than delayed perfection. – Mark Twain
## 7. "Good Enough" Today: Treading Water Tomorrow
Transitioning to BTP often creates the expectation of system stability, similar to traditional SAP on-premise setups. However, BTP evolves rapidly, requiring an adaptive mindset. Treating BTP as a static resource leads to issues. For example, SAPUI5 CDN periodically stops supporting certain versions, causing app failures.

In the Fiori space, we've seen many changes: the Fiori cloud service was deprecated, the Portal service transformed into the Launchpad service, then Workzone standard, and SAP Workflow Management was replaced by SAP Business Process Automation. Moving to the cloud requires ongoing attention and adaptation to keep systems running smoothly and avoid new technical debt.

Security is another area impacted by this shift. Applications deemed secure one day can become vulnerable the next, necessitating constant vigilance. SAP often releases critical security patches that catch teams unaware, leading to unplanned projects to update deprecated frameworks. There is no backward compatibility in the cloud, only frequent breaking changes.

While trying to escape years of legacy constraints, organizations risk creating new technical debt if they don't adapt their practices. Quick fixes can lead to future technical debt, creating a cycle of continual patching. The pace of innovation requires evolving processes and quality assurance practices to avoid slowing progress while technology advances.

Adopting new technologies means evolving ways of working, developing new practices, and embracing continuous platform evolution. Without this adaptive mindset, teams fall into the same traps they sought to escape.

>The future is not something we enter, but something we create –  Leonard I. Sweet
## Conclusion: Embrace Informed and Adaptive Practices
Technology is changing faster than ever. To avoid creating the legacy we are running away from, we must adapt our practices. With advances like AI, tasks that once took months can now be accomplished in hours. While this increase in speed is beneficial, it also introduces new challenges. The constraint of not being able to do things fast enough quickly shifts to not being able to review or deploy fast enough. This necessitates putting more effort into automating repeatable tasks like quality assurance.

Before diving into the next technological innovation, it's crucial to understand what it offers. Consider its strengths, trade-offs, and how it addresses current limitations. This isn't about jumping into the deep end without preparation; it's about strategically navigating the waters.

**5 Questions to Reflect On:** (Loosely Based on TOC)
1. **What Does This Technology Offer?** Understand the unique advantages and capabilities it brings that we don't currently have.
2. **What Are the Trade-Offs?** Evaluate the potential downsides or sacrifices involved in adopting this new technology.
3. **Which Current Constraints Need Re-evaluation?** Identify existing processes or governance structures that might hinder successful adoption.
4. **What New Constraints or Rules Are Required?** Establish new guidelines to ensure smooth integration and utilization.
5. **How Can We Avoid Repeating Past Mistakes?** Learn from previous experiences and ensure that we don't get stuck in outdated practices.

To make the most of new technology without being held back by the past, we need to challenge the status quo. This means discarding ineffective practices, embracing automatable and repeatable processes, and continuously adapting our strategies. It's not about quick fixes or get-rich-quick schemes, but about building a solid foundation for long-term success.

**About the Author**  
John Patterson is a Principal Software Engineer at Second Phase Solutions, he has spent the past 25 years learning new technologies and working with teams on how they can adopt them effectively. Since COVID, he has focused on SAP Business Technology Platform (BTP). Before that, working with teams across Asia and globally, helping them adopt best practices for the Fiori Programming Model for S/4HANA, SAPUI5, and Process Integration.

Don't wait till you think you need expert advice. Connect with me on [LinkedIn](https://www.linkedin.com/in/johnspatterson/) today, and let's avoid SAP headaches together.


    
 