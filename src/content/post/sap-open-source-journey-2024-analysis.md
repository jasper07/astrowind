---
publishDate: 2024-7-29T00:00:00Z
title: SAP Open-Source Journey - Code Connect 2024 Analysis
excerpt: An in-depth analysis of SAP's evolving open-source strategy following Code Connect 2024, examining the company's journey toward greater community engagement and technical innovation in the open-source space.
image: ~/assets/images/opensource2024.jpg
category: Cloud Development
tags:
  - SAP CAP
  - ABAP
  - SAPUI5
  - Open Source
  - Code Connect
---
Originally published on [LinkedIn](SAP Open-Source Journey - Code Connect 2024 Analysis)
_Disclaimer: This article reflects my personal views and experiences. It’s intended to foster dialogue and improvement in the SAP ecosystem._
## TL; DR
SAP Code Connect (June 3-6, 2024), a grassroots developer conference, showcased three SAP technologies at different stages of open-source adoption:

1. **CAP**: Embracing open-source principles, but still evolving with significant licensing restrictions.
2. **UI5**: Partially open-source with OpenUI5, yet facing challenges in external adoption and quality assurance.
3. **ABAP**: Closed source, although community-driven open-source initiatives are emerging.

Key observations:

- There is a disconnect between SAP's open-source goals and actual implementation, particularly regarding licensing terms for CAP.
- Community-driven projects indicate a growing interest in open-source collaboration, but many efforts remain siloed within SAP.
- Lack of visibility and data on external adoption of SAP's open-source tools limits community engagement.
- Survey results on UI5 app usage revealed significant gaps in testing and quality measures.
- The community calls for better support, recognition, and sustainability models for contributors.

***"If I have seen further, it is by standing on the shoulders of giants."***  
-- Sir Isaac Newton -

## Current state of play

SAP's ecosystem is currently experiencing significant inertia, as many customers remain tethered to their legacy ERP systems. The reluctance to upgrade is largely due to the high costs and complexities associated with migration, leading to a skills gap in the market and resistance to adopting newer technologies like S/4HANA cloud. 

With the 2027 deadline for ending support for these legacy systems looming, SAP finds itself in a "Mexican standoff" with its customers over S/4HANA adoption. This standoff complicates SAP's transition to a cloud-based services company, as many customers lack the motivation and expertise to migrate.

## Keeping up with the Joneses  
In stark contrast, SAP's primary competitors in the ERP market Oracle and Microsoft have not only successfully transformed their business models and public images but have also emerged as likely front-runners in the AI space. While both companies have faced their own challenges, their strategic embrace of open-source principles has significantly enhanced their internal cultures and external perceptions, positioning them at the forefront of technological innovation.

Microsoft, once vehemently anti-open source under Steve Ballmer, Microsoft has transformed into a leading contributor to open-source projects. This shift has dramatically changed both internal culture and external perceptions, positioning Microsoft as an innovative, collaborative player in both the cloud and AI markets.

Oracle, once known primarily for its proprietary database technology and fierce rivalry with SAP, has strategically embraced open-source, contributing to and stewarding widely used projects like MySQL, Java, Oracle Linux, and VirtualBox, extending its influence far beyond its traditional ecosystem.

In both cases, the adoption of open-source principles has been instrumental in:

- Changing internal company culture to be more innovative and collaborative.
- Shifting external perceptions from closed, proprietary vendors to open, community-oriented companies.
- Attracting a new generation of developers and customers.
- Facilitating smoother transitions to cloud-based business models.
- Accelerating innovation and product development cycles.

To date, SAP's open-source efforts have primarily focused on infrastructure projects like Gardener for Kubernetes management. While valuable, this approach has been largely self-serving and doesn't directly address the needs of developers from partners and customers who build on SAP's platforms. Despite SAP's recent public commitment to expanding open source innovation, as outlined in their [Open Source Manifesto](https://news.sap.com/2024/06/sap-commits-open-source-manifesto), the actual progress in embracing open source remains less evident in practice.

SAP relies heavily on its partner ecosystem for adopting and deploying SAP S/4HANA Cloud, building industry-specific solutions, and supporting legacy products. However, the proprietary nature of much of SAP's software and development frameworks makes it challenging for partners and customers to innovate rapidly and collaborate effectively.

This approach impacts SAP's ecosystem agility and the adoption of new technologies by customers. It also affects SAP's ability to keep pace with competitors who have more openly embraced open-source strategies across their development ecosystems.

## Strong opinions loosely held
Before sharing my observations from the recent Code Connect conference, I'd like to provide some context about my extensive experience with SAP technologies:

- I've been involved in the SAP community for close to 25 years.
- I was an early contributor to SAPUI5 and a vocal advocate for its open-sourcing.
- I've been an active participant in the OpenUI5 community, Stack Overflow, and SDN as a topic leader.
- I've contributed pull requests and created multiple open-source projects for the OpenUI5 ecosystem and others.
- I've been an early adopter of SAP HANA and have been very vocal about the need to open-source it.
- I worked at one of the first customers to go live with SAP CAP (Cloud Application Programming Model).
- I've participated in numerous Customer Engagement Initiatives (CEI), providing input on many  teams roadmaps.
- I've consistently emphasized the importance of open-sourcing for product adoption and longevity.
- I've been a strong advocate for external adoption to positively influence product development.

## Code Connect: A New Hope

The recent Code Connect conference in St. Leon-Rot, Germany has emerged as a crucial event in the SAP ecosystem, filling the void left by the post-COVID demise of SAP TechED and the decline of the once-vibrant SAP Community Network (SCN). The SCN's challenges stemmed from multiple factors:

1. Marketing's constant efforts to replatform the community to measure effectiveness, causing confusion and disrupting established community dynamics.
2. A lack of community moderation, which allowed low-quality content to proliferate.
3. An increasing signal-to-noise ratio as marketing content began to dominate technical discussions.
4. The influx of marketing material that drowned out valuable technical conversations.

These issues collectively contributed to an "Eternal September" effect, where new, enthusiastic users continually entered the space, but the content and community structure didn't mature to meet their needs. While these challenges have impacted the community, Code Connect offers a refreshing alternative.

This developer-only gathering brought together a diverse mix of SAP internal developers, ISVs (Independent Software Vendors), and senior developers from customers and consulting firms from all around the world. Notably, AI was mentioned so rarely I could count the occurrences on one hand. Instead, the focus was on practical, hands-on technical discussions and networking, addressing the real-world needs of developers in a way that larger, business-oriented events like Sapphire couldn't match

Code Connect provided a much-needed platform for developers to share best practices, particularly around non-functional requirements. This exchange of knowledge, free from marketing hype, is more pertinent than ever in the cloud era. Developers tackled crucial topics like deploying at scale, testing strategies, performance optimization, and other 'ilities' essential for robust SAP development.

For many in the SAP developer community, Code Connect has effectively become the de facto annual reunion, offering a new hope for collaborative, technical engagement in the modern SAP landscape. It's a place where developers can connect, learn, and share without the distraction of marketing buzzwords, focusing instead on the practical challenges of building and maintaining SAP systems at scale.The three-day structure of the conference provided an interesting lens through which to view the varying degrees of open-source adoption across a portion of SAP's vast technology stack:

1. **Day 1 (re>≡CAP):** SAP Cloud Application Programming (CAP) represents SAP's more recent efforts to embrace open development practices. Introduced in 2018 with partial open-sourcing in 2022, it reflects SAP's gradual shift towards openness in cloud development tools.
2. **Day 2 (UI5 Conference):** SAPUI5, particularly its open-source version OpenUI5, demonstrates SAP's stronger commitment to open source in frontend technologies. Released under the Apache 2.0 license in 2013, it shows SAP's effort to keep its UI development tools relevant in modern web development.
3. **Day 3 (ABAP Conference):** ABAP, being SAP's proprietary language from the 1980s, represents the more traditional, closed-source aspect of SAP's technology. However, the mention of community tools like abapGit embracing open-source principles indicates how even within SAP's legacy systems, there's a push towards adopting open-source practices where possible.

## Day 1: ReCap - SAP CAP Conference

SAP Cloud Application Programming model (CAP), partially open sourced in 2022, showcases SAP's attempt to embrace open-source principles.

### Keynote Highlights

Key highlights from Daniel Hutzel's keynote (SAP Chief Architect and CAP product owner) :

1. Resource constraints highlighting the need for community support.
2. Emphasis on plugin development for business value acceleration.
3. Call for external contributions, underscoring the importance of open collaboration.

The cap-js-community project demonstrates potential for community-driven innovation, but efforts remain siloed within SAP, with limited external visibility.
### A Community Restricted

 [The SAP CAP license,](https://tools.hana.ondemand.com/developer-license-3.1.txt) imposes significant limitations:

- Limited use, non-transferable, non-sublicensable, and revocable.
- Prohibits impairing SAP software performance or bypassing license restrictions.
- Restricts sharing SAP licensing information without consent.
- Prohibits mass data extraction from SAP to non-SAP products, potentially limiting cloud data portability and integration.
- Requires developers to waive Intellectual Property Rights claims against SAP for Customer Applications.

### The ReCap of ReCap: A Tale of Two Strategies

SAP promotes its commitment to open-source through various initiatives, expressing a desire for external validation and collaboration. Yet, the "SAP DEVELOPER LICENSE AGREEMENT" for CAP tells a different story. Its restrictions may deter those accustomed to more permissive open-source licenses, hindering broader adoption.

While SAP views CAP as a critical component of its strategy, treating it as "secret sauce" isn't benefiting anyone. This approach limits innovation, restricts community contributions, and could slow SAP's ability to compete. There are concerns that fully open-sourcing CAP could allow hyperscalers and others to bypass SAP and access customer data directly, undermining SAP's competitive position.

***"Free software is a matter of liberty, not price. To understand the concept, you should think of 'free' as in 'free speech,' not as in 'free beer.' "*** 
-- Richard Stallman --

SAP needs to reconcile its open-source rhetoric with its restrictive licensing practices. They should focus on the true value-add: building services that deliver unique benefits to customers. CAP is the foundation, not the end product; the innovative solutions built on top are what truly matter. A more open approach could foster innovation, accelerate development, and lead to wider adoption, ultimately benefiting both SAP, its partners and customers.

## Day 2: UI5con - SAPUI5 Conference

A key takeaway was the emergence of open-source projects enhancing developer tooling through community collaboration. However, feedback from the field tells a different story.

A session on community feedback revealed how UI5 is used in practice. A survey on UI5 app usage revealed alarming trends.

- There's a significant lack of testing being done on customer sites.
- Few developers implement quality measures.

These findings highlight a disconnect between available quality tools and their adoption, raising questions about promoting best practices in the SAP development ecosystem and the challenges developers face in implementing robust quality assurance measures.
### The Testing Tooling Landscape

The SAP community has developed testing tools like [WDi5](https://ui5-community.github.io/wdi5/#/) to address gaps in SAP's testing ecosystem. These tools emerged following the discontinuation of SAP's UIVeri5 (an end-to-end testing tool built on the now-deprecated Google Protractor) and the deprecation of Karma JS for unit test automation. The absence of official tools may fragment the ecosystem, leading developers to seek various solutions.

Despite developing tools like WDi5, SAP's stance on these community solutions remains unclear, creating several issues:

1. It's unknown if SAP uses these community-developed tools internally.
2. SAP hasn't publicly shown adoption of these tools in its own products.
3. There's no transparent communication about SAP's current end-to-end and unit testing practices.

This ambiguity leaves the community without clear guidance on best practices. The lack of visible commitment from SAP regarding community-developed testing tools creates uncertainty in the ecosystem, leaving developers to speculate about SAP's testing strategies and tool preferences, potentially hindering the adoption of valuable community solutions and leaving gaps in the testing landscape unfilled.

### External Adoption and Visibility

In a conversation with Peter Muessig, Chief Development Architect, we discussed UI5 adoption outside SAP. While OpenUI5 and UI5 Web Components are recognized as enterprise libraries, their usage beyond SAP's immediate sphere remains unclear.

Anecdotal evidence includes potential use in an EV dashboard and past usage by SAS Software. However, these examples are isolated, and the true extent of UI5's external adoption is unknown, highlighting a gap in understanding the real-world impact of these open-source efforts.

This lack of visibility has several implications:

1. Greater visibility into the adoption of UI5 outside the SAP ecosystem could strengthen its position in the JavaScript landscape.
2. UI5 has the potential to create consistent user experiences across various enterprise IT systems, including SAP and third-party applications.
3. The absence of success stories makes it difficult for enterprises and ISVs to recognize UI5's benefits.
4. Limited adoption data may hinder external contributions and wider adoption in enterprise IT environments.

UI5 Web Components I feel are an integral to SAP Fiori's vision of a consistent, user-friendly interface across the IT landscape. They enable a unified experience for all applications, SAP and non-SAP alike.

Measuring UI5's external adoption could provide insights into its effectiveness. This visibility could help SAP assess their strategy to extend Fiori's reach and demonstrate the value of UI5 Web Components in creating cohesive user experiences for IT organizations. If UI5 is more widely used across IT organizations, it benefits both customers and SAP by simplifying development and enhancing sales opportunities.

### The Quality Conundrum

The UI5 community has made strides in open-source development. However, there are notable challenges regarding overall development quality:

1. **Marketing vs. Reality**: While SAP's marketing promotes quick wins through low-code solutions, developers face real challenges. There is a pressing need to address technical debt and provide better support for maintaining and optimizing production-level code.
2. **Testing and Transparency**: SAP needs to enhance code quality by endorsing tools like WDi5 and providing clear guidance on testing practices. Increased transparency about internal testing strategies is also essential.
3. **Developer Experience Gap**: What customers are told about the developer experience often falls short of needs.

To address these challenges, SAP's internal product teams building services and apps should enhance communication and collaboration with the developer community. By sharing their internal testing strategies and best practices, these teams can lead by example and guide customers toward improved quality standards.

The community should reinforce collaborative code standards and best practices for quality and testing, emphasizing end-to-end testing and clean code principles to foster a quality culture in SAP development.

## Day 3: ABAPconf2024 - The ABAP Conference
The ABAP Conference showcased the level of maturity and thirst for best practices, that clearly stood out.

### The ABAP Renaissance: Open Source as the Catalyst

One of the standout sessions on Day 3 was [Addressing the Future of ABAP: The Power of Open Source" by Mark Bernard](https://www.abappm.com/ABAPConf_2024_Addressing_the_Future_of_ABAP_-_The_Power_of_Open_Source_-_Marc_Bernard_-_June_06_2024.pdf). This thought-provoking and entertaining presentation challenged the notion that "ABAP is dead" while acknowledging the ecosystem's crossroads. Mark highlighted how open-source methodologies could breathe new life into ABAP, addressing critical issues such as:

- An aging developer community.
- The growing burden of legacy applications.
- The need for innovation in a proprietary ecosystem.
### Celebrating Community Leaders and Their Contributions

A significant highlight was Mark's acknowledgment of  Lars Hvam [@larshp](https://github.com/larshp) , the creator of [ABAPGit](https://abapgit.org/), as a "Benevolent Dictator for Life" (BDFL). This recognition underscored Lars' tireless contributions to numerous open-source initiatives in the ABAP ecosystem, with ABAPGit being a prime example. Now in its [10th year, ABAPGit](https://www.linkedin.com/pulse/happy-birthday-abapgit-10-years-lars-hvam-petersen-dh3mf/) has become an essential tool for many SAP customers and partners, playing a crucial role in:

- Customer migrations to S/4HANA cloud.
- ISVs building white space solutions.

ABAPGit and many other tools have generated significant goodwill for SAP, demonstrating the power of community-driven development and the impact of open-source contributions. 
### The Sustainability Challenge

Mark made a compelling case for why he, Lars, and other key contributors should be able to make a living from their efforts. He emphasized that sustainable income streams for these contributors are crucial for:

- Ensuring long-term maintenance and quality of critical open-source projects.
- Encouraging continued innovation in the ABAP ecosystem.
- Supporting tools that have become essential to many SAP customers and partners.

Mark explored various financial models to support open-source contributors, stressing that these are not just about personal gain, but about nurturing a thriving open-source ecosystem within SAP.

### A Call to Action

The session served as a stark reminder of the immense value these open-source initiatives bring to both customers and SAP. It challenged SAP and the broader ABAP community to:

- Think creatively about supporting and sustaining open-source efforts.
- Develop a more robust open-source ecosystem within SAP.
- Actively support and nurture key contributors, not just benefit from their work.

The message was clear: open-source is the key to making ABAP cool again, and it's time for SAP to fully embrace this movement. This call to action highlights the need for SAP to better support and recognize these contributions, ensuring the continued vitality and relevance of ABAP in the modern development landscape.
## Conclusion: Observations and Opportunities in SAP's Open Source Journey

***"Empowerment of individuals is a key part of what makes open source work, since in the end, innovations tend to come from small groups, not from large, structured efforts."***  
-- Tim O'Reilly --

SAP's current innovations and open-source initiatives are built upon decades of industry expertise and the contributions of many individuals. The observations from SAP Code Connect reveal several opportunities for SAP to enhance its approach to open source:

1. **Transparency in Development**: Increasing transparency in development processes and adoption metrics could enhance community trust and participation.
2. **Licensing Practices**: Aligning SAP's licensing terms more closely with established open-source standards could remove barriers to adoption and encourage broader use of SAP technologies.
3. **Community Contributions**: Strengthening support and actively engaging with community contributors can foster a more vibrant ecosystem, leading to increased innovation and higher quality projects.
4. **Quality Assurance**: Improving quality assurance practices for community-developed code could enhance the reliability and perception of SAP technologies, potentially increasing user confidence and adoption rates.
5. **External Adoption Visibility**:  reater visibility into the adoption of UI5 outside the SAP ecosystem could strengthen its position in the JavaScript landscape and demonstrate its value in creating cohesive user experiences.


## Acknowledgments
I want to give a huge shoutout to all my colleagues at SAP and everyone in the broader community who took the time to chat and share their insights that led to this article. You know who you are—thank you! Your support and open dialogue really helped shape my thoughts, and I truly appreciate the collaborative spirit that drives change and innovation.
