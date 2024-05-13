---
title: Infinitic
description: A guide in my new Starlight docs site.
layout: '../../../layouts/SystemLayout.astro'

system:
    product:
        name: Infinitic
        authors:
            - Gilles Barbier
        license: MIT + Commons Clause
        github: https://github.com/infiniticio/infinitic
        docs: https://docs.infinitic.io
    features:
        test_without_server: false
    articles:
        - https://gillesbarbier.medium.com/the-way-we-are-building-event-driven-applications-is-misguided-7f7c5f1a9061
        - https://medium.com/@gillesbarbier/an-easy-path-from-api-based-microservices-to-an-event-driven-architecture-for-improved-reliability-00d7d0bc3828
        - https://www.slideshare.net/slideshow/infinitic-building-a-workflow-engine-on-top-of-pulsar-pulsar-summit-na-2021-keynote/249476912
        - https://visortelle.substack.com/p/demystifying-apache-pulsar-deployment
---

## High over 
Information about Infinitic


## Questions

- How do do you deal with versioning?
- How easy is it to create another client?
- Are you considering another back-end then Pulsar? Considering it is quite something to host that yourself 
- Would it be possible to not only run workflows through it but also HTTP calls? 
- How does it compare to Restate (especially considering state)?
- What happens if a workflow is currently occupied? Can messages be sent?
- I'd like to consider building BPMN on top of Infinitic, to compete with Camunda 
- Performance of 20 workflows per second on a macbook? That is quite limited.. Do you have performance tests?
- What do you create topics for? There is quite a few - what if you want to run millions of workflows?
- Running Pulsar is not an easy feat, there is cloud but how about the latency for Managed or cost for BYOC?


what happens if you have a wait for 1 month and another event is pushed? 

Temporal 
Funding? Single developer? --> yes 
Thinking of using with rabbitmq 
Performance  --> 
typiical latency for a task 
can be used for web requests? 
there is an in memory version for testing 
planning on new clients? 
DSL 


How do we move from here?

- ill try it out
- do you intend to run it yourself a cloud version? Yes, for now only support 