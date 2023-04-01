---
title: Early versions of GitHub Copilot output insecure code 40% of the time
companies: ["GitHub"]
categories: ["Cybersecurity", "Overreliance"]
experimental: true
modalities: ["Code Generation"]
date: 2021-10-15
models: ["GPT-4"]
sources:
  - "https://cyber.nyu.edu/2021/10/15/ccs-researchers-find-github-copilot-generates-vulnerable-code-40-of-the-time/"
  - "https://techcommunity.microsoft.com/t5/educator-developer-blog/github-copilot-update-new-ai-model-that-also-filters-out/ba-p/3743238"
---

Cybersecurity researchers at NYU Tandon discovered that a significant portion of code generated by GitHub Copilot was either buggy or potentially vulnerable to attack. The researchers evaluated 1,692 programs generated by Copilot for 89 different scenarios, and found about 40% had bugs or design flaws exploitable by attackers.

Copilot’s propensity for outputting insecure code is particularly concerning given programmers’ increasing reliance on the tool. GitHub recently released an update to Copilot that attempts to filter out security vulnerabilities.