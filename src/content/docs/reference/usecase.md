---
title: Use case 
description: The use case that is used throughout this repository as example
---

Zoef.app

## Pseudo code

```ts
async function processClaim(claim: SubmittedClaim) {
    let isEligible = eligibilityService.isEligibile(claim)
    let fiveMinuteTimer = wait.minutes(5)

    await Promise.race([future, isEligible])
    fiveMinuteTimer.cancel()

    if (isEligible.value === true) {
        await mailService.sendMail(TEMPLATE_ELIGIBLE, claim)
    } else if (isEligible.value === false) {
        await mailService.sendMail(TEMPLATE_NOT_ELIGIBLE, claim)
    } else {
        await mailService.sendMail(TEMPLATE_CLAIM_RECEIVED, claim)
    }
}
```

