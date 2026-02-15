---
publishDate: 2026-02-01T00:00:00Z
title: The Drift That Haunts Your BTP
excerpt:  You designed the system to last. Your assumptions didn’t. The fortress is already in the river and nobody saw it happen. BTP moves whether you do or not. Another expert won’t stop the drift. 
image: ~/assets/images/btp-drift.png
category: Platform Engineering
tags:
  - BTP
  - Cloud Governance
  - DevOps
  - Platform Engineering
  - Cloud Migration
---
> The first step is to accept the fact of change as a way of life, rather than an untoward and annoying exception  

**Frederick Brooks**, _The Mythical Man-Month_

## TL;DR

Drift isn't a bug in BTP, it's a feature of an evergreen platform. BTP updates continuously. New services, API changes, runtime patches ship on SAP's schedule. Your configurations, credentials, policies, and assumptions update on yours. As AI accelerates both platform evolution and your intent to use new capabilities, this mismatch intensifies. Six common approaches all fail the same way by assuming the platform will sit still between your updates. The river doesn't wait.
## The Fortress and the River

In the on-premise world, slippage was an anomaly. You installed the system, configured it, wrote the runbook. You told everyone - "Don't touch it." And mostly, nothing changed. The system sat still. Patches came on schedules. Upgrades were planned months in advance. The system you documented on Day 1 was the system still running on Day 100, Day 500, Day 1000.

BTP flips this to an OPEX-style model. SAP continuously evolves the platform, offering new services and improvements, while you configure the surface layer for your extensions. Your declarations capture a moment in time, but the platform keeps moving beneath them. BASIS drift was a maintenance lapse you owned. BTP drift is a clash of timelines where platform evolution outpaces configuration updates.

## The Hands of Change

The friction in BTP isn’t the platform as it’s sold. It’s the platform as it’s used. We write the playbook, but the environment moves faster than our instructions. Drift is not a configuration error. Configuration is the state you declare. Drift is the state you actually run. It emerges when multiple teams, policies, and processes interact at different speeds.

| Who                                       | Why They Move                                                                                      |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **SAP, The Provider**                     | Updates services, runtimes, and default settings on their schedule. Not yours.                     |
| **The Developer, The Creator**            | Adjusts bindings, destinations, and credentials to meet deadlines. Moves faster than governance.   |
| **The Operator, The Protector**           | Fixes production during incidents. Creates gaps between what's running and what's documented.      |
| **Compliance & Security, The Regulators** | Updates policies when vulnerabilities surface. Changes what "correct" means without touching code. |
| **Time, The Environment**                 | Certificates expire. Credentials rotate. Tokens timeout. The clock doesn't wait.                   |
| **The Architect, The Standard**           | Best practices evolve. Even if the system doesn't change, the requirements do.                     |

The platform, teams, and processes move at different speeds. When the playbook falls behind, each group reacts in its own way. 
## Day 2 Archetypes

| Approach          | Primary Tooling      | How Drift Gets Fixed                                                                                                 | The Day 2 Problem                                                                                                                                                                                                                                                                                               |
| ----------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ClickOps**      | BTP Cockpit          | Manual push. Someone notices something is wrong and clicks to fix it                                                 | **Invisible Drift.** No playbook, no record of who changed what or why. Knowledge lives in people's heads and leaves when they do. The system drifts constantly and nobody sees it.                                                                                                                             |
| **Imperative**    | BTP CLI / Scripts    | Manual push. Re-run the script when you remember to check for drift                                                  | **Zombie Resources.** Scripts rely on fixed API behavior and break when the water moves. Partial runs leave leftover resources. Drift accumulates unless someone actively fixes it.                                                                                                                             |
| **Declarative**   | Terraform            | Manual push. Run `terraform plan` to detect drift, then `terraform apply` to reconcile the system.                   | **Ghost Resources.**  Teams abandon the Terraform workflow and click in Cockpit instead, creating resources that Terraform can't reconcile. Drift only detected when you manually trigger a plan.                                                                                                               |
| **GitOps**        | Terraform + Agents   | Automatic pull. Git is source-of-truth. Agents poll continuously and apply changes to reconcile drift with the repo. | **Vengeful Automaton**. GitOps enforces the declared state even when urgency breaks procedure. Operators may make quick changes to keep systems running, but automated reconciliation removes them before review.                                                                                               |
| **Control Plane** | Crossplane           | Automatic pull. Controller continuously detects and fixes drift                                                      | **Time Loop.** Automation keeps enforcing the desired state even when the platform itself is broken. It does not recover, it just keeps retrying. On the surface it looks like the system is healing. In reality it is stuck, and the automation is hiding the real problem from the people who need to see it. |
| **AI-Assisted**   | GenieOps / AI Agents | AI-triggered push. AI detects drift and proposes or applies fixes                                                    | **Hallucinated Infrastructure**. AI generates configurations on demand, but repeated runs produce slightly different results. The system drifts from itself. Only a human catches it.  

These aren't steps on a maturity path. They're six different ways teams cope when the platform moves faster than the plan.
## Conclusion

The move to BTP is a transition from an ownership model to a partnership with a moving platform. You cannot outsource "watching the tide" to someone who is only paid to "hold the reel." If governance doesn't move with the platform, the very tools we bought to save us will be the ones that pull us under.

Teach a man the water, not the reel. When systems drift, the first reaction is often to outsource the problem or add more people to operate the tools. But running a tool is not the same as understanding how a system behaves. If the work stays at the surface, drift continues and the line breaks.

AI changes the current, but it doesn't change the need to understand the water.

> Practical drift is the slow, steady uncoupling of practice from written procedure.

**Scott Snook**, _Friendly Fire_

### About the Author

**John Patterson** is a Principal Software Engineer at Second Phase Solutions. For 25 years, he has watched systems ship clean on Day 1 and drift quietly by Day 100. He has built large-scale engagement platforms, led follow-the-sun NetWeaver teams, and worked inside the friction that emerges when the playbook stops matching reality. Since COVID, he focuses on SAP Business Technology Platform and what happens on Day 2.

This isn’t a tooling problem. <br>
Observe. Measure. Then act.

If you recognised the smell, we're looking at the same system. Let's [talk](https://www.linkedin.com/in/johnspatterson/).
