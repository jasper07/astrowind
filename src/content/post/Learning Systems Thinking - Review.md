---
publishDate: 2025-1-21T00:00:00Z
title: Learning Systems Thinking - Review
excerpt: This book provides frameworks for understanding complex system interactions. While content can be abstract, practical tools (TDE Framework, Seven Questions) help analyze technical and social aspects of systems. Most valuable for consultants and architects dealing with system-wide changes.
image: ~/assets/images/learning-systems-thinking.png
category: Book Review
tags:
  - Book Review
  - Sytem Design
  - Problem Solving
---
## Quick Reference
- **Format**: Audiobook (O'Reilly)
- **Key Focus**: Like Design Thinking ensures solving right problems right 
- **Reading Time**: 5-6 hours at 2x speed
## What is Systems Thinking?
Systems Thinking challenges traditional linear problem-solving. Rather than jumping to solutions ("we need Kubernetes"), it steps back to understand why problems exist, how parts interact, and what broader impacts occur. This approach ensures we're solving the right problems for the right reasons.
## Reading Experience
Audio format works well at 2x speed. While lengthy, repetitive nature helps reinforce concepts. Complements Design Thinking, Critical Thinking, ADRs and DDD principles.
## Case Study: MAGO
The book uses a fictional company (MAGO) to illustrate a common scenario: asking different stakeholders what they need from their aging system. Predictably:
- Sales: "We need to make more money"
- Developers: "We need new technology"
- Operations: "We need it to work reliably"

Ask five people what's wrong with their system, get six different answers. Shows why you need to understand the whole picture, not just individual views.

## Linear vs Non-Linear Thinking
Traditional Linear Approach:
- Jump to technical solutions
- Focus on immediate fixes
- Single perspective problem-solving

Systems Thinking Approach:
- Question the problem's existence
- Explore multiple perspectives
- Consider broader impacts
- Challenge assumed solutions  
## Key Insights
> Systems thinking often involves moving from observing events or data, to identifying patterns of behavior over time, to surfacing the underlying structures that drive those events and patterns. - Michael Goodman

> Pattern thinking is not simply learning patterns you can apply. It is learning to discover, discern, and describe patterns in your circumstances. And it is learning to transform patterns to steer a system in a different direction.

## Communication Frameworks
The book introduces TDE (Think-Design-Enable) as a framework for connecting problem understanding to potential solutions.

### TDE Framework
TDE brings stakeholders together through a one-page artifact that forces clarity -- connecting problem understanding to potential solutions. By answering six key aspects:

Summary -- Frame the discussion with essential context
- Why -- Question and align on true system purpose
- What -- Define actions that directly serve that purpose
- Who -- Consider all impacted stakeholders and benefits
- How -- Link high-level approach to implementation details
- When -- Understand timing constraints and impacts

The value lies in creating shared understanding before jumping to solutions. TDE encourages exploration of alternatives considered but not chosen, surfacing assumptions made, and acknowledging unknowns. It can reference other artifacts (mission statements, system models, ADRs) without duplicating their content, making relevant information easy to find.

## Seven System Questions 
The book presents a systematic framework examining:

1. How does information flow through the system?
   -- Understanding data creation, movement and transformation

2. What triggers system behavior and change?
   -- Identifying events and their impacts

3. Where are the system boundaries?
   -- Examining component relationships

4. What makes up the system?
   -- Analyzing core architecture

5. How does work get done?
   -- Understanding delivery and quality

6. How is the organization structured?
   -- Examining team dynamics

7. How do people communicate?
   -- Understanding decision flows

Each question includes detailed sub-questions helping analyze both technical and social aspects of systems. The framework helps build complete system understanding before attempting solutions.


## Systems vs Design Thinking
The book highlights complementary approaches between Systems Thinking and Design Thinking:

1. **Context Understanding**
   - Systems: Understand the context
   - Design: Understand the operating context

2. **Problem Definition**
   - Systems: Summarize understanding of the problem
   - Design: Question if it's the "right" problem

3. **Perspective Gathering**
   - Systems: Seek diverse perspectives
   - Design: Ideate collaboratively

4. **Solution Development**
   - Systems: Free write exploration
   - Design: Co-create solutions rapidly

5. **Synthesis**
   - Systems: Construct from multiple perspectives
   - Design: Converge to recommendation

6. **Validation**
   - Systems: Get feedback
   - Design: Get feedback

7. **Communication**
   - Systems: Tailor for audience
   - Design: Tell the story

## Reading Status
- [x] Initial read complete
- [ ] Need to revisit Pattern Thinking chapter
- [x] Found practical applications
- [x] Good reference material

## Conclusion
This book challenged how I think about problems, especially those requiring deep observation to recognize patterns. The author skillfully uses visual narratives which, while sometimes abstract for practical minds, effectively convey complex concepts.

The frameworks provided (TDE, Seven Questions) offer practical tools for understanding both technical and social aspects of systems. While team exercises would help validate these approaches, the book provides valuable perspectives for anyone dealing with complex system problems.

Most valuable for:
- Understanding root causes vs symptoms
- Breaking linear thinking patterns
- Building shared understanding
- Approaching modernization holistically

Worth reading if you:
- Work with complex systems
- Need to improve problem-solving
- Want to understand system dynamics
- Are interested in organizational patterns