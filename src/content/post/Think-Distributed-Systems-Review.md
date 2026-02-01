---
publishDate: 2025-10-27T00:00:00Z
title: Think Distributed Systems - Review
excerpt:  I jumped straight to Chapter 11 on Durable Execution and hit a wall. Going back to Chapter 1 taught me why mental models matter more than memorizing patterns and frameworks. This review explains why you can't skip the fundamentals. 
image: ~/assets/images/think-distributed-systems.png
category: Book Review
tags:
  - Book Review
  - Sytem Design
  - Devops
  - Platform Engineering
  - Distributed Systems
---
## Quick Reference
**Format**:  Audiobook (Manning)  
**Key Focus**: Building the mental scaffolding to understand and design reliable distributed cloud services.  
**Reading Time**: ~3.5 hours at 1.5× speed

## My Journey to Understanding

I read this because I wanted to understand Durable Execution. I started with Chapter 11, but the format felt disjointed. I felt I knew what Durable Execution was but the way it was being described I couldn't understand.

There is a fundamental difference between knowing and understanding and this book focuses on how to understand distributed systems better using mental models.

## The Blind Men and the Elephant

Distributed Systems are very complex, and the analogy used in this book and many other systems thinking books is the [blind men and an elephant](https://en.wikipedia.org/wiki/Blind_men_and_an_elephant) parable. Seven blind men come across an elephant, each feeling a different part: trunk, legs, ears, etc. and believing their part best describes the whole elephant. Each person touching one part has a "truth" but it's incomplete. We need to recognize that our mental models are formed by limited perspectives. We need to actively seek out other perspectives to build a more complete understanding of the system. The system exists independently, but integrating multiple mental models helps us see the full picture.

## ACID as Foundation

I have been working on distributed systems as long as I have been working on databases, and there is a strong link between them. Database transactions make a promise "all or nothing", and we rely on this promise, also known as two-phase commits (2PC). Before we move onto distributed transactions, we need to fully understand ACID: Atomicity, Consistency, Isolation, Durability.

ACID properties work together. Atomicity means operations either complete entirely or not at all. Consistency ensures the database moves from one valid state to another. Isolation means concurrent transactions don't interfere with each other. Durability guarantees that once committed, changes persist even after failures. Without these guarantees working together, we can't build reliable systems.

## Building Mental Models Layer by Layer

This book builds up these mental models, layering them one upon another. It starts with foundational concepts: guarantees, states, types of failures (application or system/platform). It explores failure, failure tolerance, and failure transparency. What are the different states? What is the difference between an application and system failure? Where should we handle failure? When should we compensate for failure? The same questions apply to message deliveries and guarantees. Then it moves to transactions, distributed transactions, and the coordination required across multiple systems. Each chapter adds another layer to your understanding.

## What is Durable Execution?

It's only when we truly understand failures, failure tolerances, guarantees, and consistency that we can start to understand durable execution. 

"*Durable executions are to distributed systems what transactions are to databases: an abstraction concealing the possibility of failure and what to do with it."*

I read this book to understand durable execution. Durable execution matters because it lets us restart safely, not error out. Think of it as a workflow with guarantees across steps, even when those steps include non-deterministic operations like timestamps, random values, or AI calls. Framing it as a mental model helps us reason about long-running, stateful processes that must survive crashes, retries, and timeouts.

Unlike traditional two-phase commit (2PC) failures, where ambiguity often leads to rollback or retry from scratch, durable execution isolates the failure scope. It allows restarts to be deterministic and idempotent, so progress isn’t lost and consistency is preserved.

But those guarantees only hold if we know where the failure came from:

- Was it application-level (logic, data, external call)?

- Or was it platform/system-level (infrastructure, orchestration, state persistence)?

That distinction isn’t academic, it determines whether we retry, compensate, or escalate. Durable execution isn’t just about maintaining guarantees in the face of uncertainty, it’s about treating failure as a normal part of distributed systems and reasoning about responsibility, not as an exceptional case.

In essence, durable execution is a design pattern, a tenet of distributed systems, not a specific implementation like Temporal, DBOS, or any workflow engine. It reflects a way of thinking about reliability, ensuring workflows can resume safely, maintain consistency, and cope with uncertainty, whether there is a human in the loop or not.

That’s why I had to start over from Chapter 1, to build the mental scaffolding needed to reason about these systems.

## How the Book Builds Up

The book follows a clear path - Transactions → Distributed Transactions → Error Handling → Replication → Consensus → Durable Execution. Each concept builds on the last. This is why jumping to Chapter 11 didn't work for me. I needed the mental scaffolding from earlier chapters.

The final chapter, Cloud and Services, closes with stories from the author's time at SAP. It's not a summary, it's a reflection on how cloud provisioning reshaped his approach to distributed systems.

## What I Took Away

Understanding durable execution requires understanding what came before. You can't skip the hard parts about failure handling and distributed coordination. The book doesn't give you copy-paste solutions. It teaches you how to reason about these systems yourself. That's why reading it cover-to-cover matters.

## Conclusion

Reading this book reminded me that the most powerful tools in engineering are not frameworks, platforms, or products but the mental models we bring to problem-solving. In these systems, mental models are operational, showing us where to reason about failures, consistency, and reliability, and how design decisions ripple across services and teams. It doesn’t just teach concepts, it teaches you how to think like someone who builds complex systems that must scale, survive uncertainty, and support evolving business needs. This book is technical but rewarding. Read it cover-to-cover if you want to truly understand distributed systems, not just gain surface familiarity.