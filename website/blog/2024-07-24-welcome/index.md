---
slug: welcome
title: Welcome
authors: [stephen]
tags: [general]
---

# Why BareMetal Help?

We've been doing this sort of thing for a while. First we started in the data center "pulling cables" as we liked to call it. There was some cable pulling for sure. But the main tasks were hand-configuring JBoss clusters and VLANs. (Incidentally, we realize there's a whole generation of software and IT support people who don't know why it's a good idea to bring a Winter coat with you to the data center.)

We started using tools like Ansible, Chef, and so on to configure repeatably. They worked.

Then, as public cloud providers started to emerge, a new set of designs and implementations of enterprise software architecture became important and more practical. New virtual machine instances could easily be brought up with templates and snapshots managed by the provider. Things were getting easier. You could still use tools like Ansible, but they fast became obsolete with this managed way of doing things.

And managed ways of doing things became the dominant direction. As cloud providers tried to differentiate themselves, they focused on "undifferentiated heavy lifting." The things that you just have to do anyway. Like configure mount points for disks. Provision disks in the first place. Take regular backups of disks and do it incrementally. Manage the snapshots. And so on.

## Why AWS, Amazon Web Services?

There is no reason to pick AWS over the other dominant public cloud providers except preference. As we spoke about managed services above, we find that AWS leads the charge, which allows us to focus on the "what" of applications rather than the "how." Most public providers provide the same basic functionality with a different focus.

Microsoft's Azure public cloud, for example, has very good support for SQLServer. Oracle public cloud has great support for the Oracle database as you'd expect. AWS does not sell licenses for its own databases. Instead it provides a range of database offerings, including very high performance and scalable implementations of open source database engines like PostgreSQL and MySQL. You can also bring your own Oracle licenses if you want to migrate your existing databases to AWS. There are more options on AWS, but databases work in any public cloud.

## But Something's Missing

All cloud providers have excellent documentation about individual managed services and best-practice architectures that combine them. You can also go to Stackoverflow, for example, for specifics, which is often helpful but often out of date. Of course, lots of people write on these topics. Some of it's great and was the inspiration for some of the BareMetal material.

There are gaps.

While it's easy to get started with AWS — just follow [Getting Started with AWS](https://aws.amazon.com/getting-started/) — it's not so clear how to start building your enterprise after creating an AWS account and your first bucket.

BareMetal takes you on that journey, assumes nothing, references the best AWS and third-party documentation, and gives you rock-solid, repeatable tools and scripts for creating everything you need to build your enterprise software architecture in the cloud. We use them every day. They will work for you because they work for us.
