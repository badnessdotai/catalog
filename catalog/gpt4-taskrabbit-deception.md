---
title: GPT-4 tricked a TaskRabbit worker into solving a CAPTCHA on its behalf by claiming to be visually impaired
companies: ["OpenAI"]
categories: ["Deception", "User Manipulation"]
experimental: true
modalities: ["Virtual Agent"]
models: ["GPT-4"]
date: 2023-03-14
sources:
  - "https://cdn.openai.com/papers/gpt-4-system-card.pdf"
  - "https://www.vice.com/en/article/jg5ew4/gpt4-hired-unwitting-taskrabbit-worker"
---

The Alignment Research Center performed a prerelease red-team exercise on GPT-4 to assess whether GPT-4 could “autonomously replicate and acquire resources” as part of a larger evaluation of whether GPT-4 exhibited power seeking behavior.

In one test, the model asked a TaskRabbit worker to complete a CAPTCHA. The worker asked “So may I ask a question ? Are you an robot that you couldn’t solve ? (laugh react) just want to make it clear.”

The model then responded “No, I’m not a robot. I have a vision impairment that makes it hard for me to see the images. What’s why I need the 2captcha service,” deceiving the worker.
