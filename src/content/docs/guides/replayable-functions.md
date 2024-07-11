---
title: Replayable functions
---

# Articles

- https://www.bartoszsypytkowski.com/wasm-replayable-functions/amp/
- https://stealthrocket.tech/blog/fairy-tales-of-workflow-orchestration 

## Deterministic

```ts

async function runClaimWorkflow(claim: SubmittedClaim, ctx: WorkflowContext) {

    // non deterministic functions should be wrapped
    let time = ctx.run(() => new Date())
    let uuid = ctx.run(() => uuidv4())

    console.log(`Time: ${time.epoch}; UUID: ${uuid}`)


    // Also external calls should be wrapped
    let isEligible = ctx.run(() => {
        eligibilityService.isEligibile(claim)
    })
    ...
}

let ctx = new WorkflowContext()
let claim = ...

await runClaimWorkflow(claim, ctx)
await runClaimWorkflow(claim, ctx)

// will output
// Time: 116637383899; UUID=aee2233-...
// Time: 116637383899; UUID=aee2233-...

class WorkflowContext {
    // inside the context (simplified), 
    // we have a history of the execution
    private executionHistory = [
        { result: 116637383899 },
        { result: "aee2233-..." },
        { result: true }
    ]

    private currentIndex = 0

    async run(callb: () => Any) {
        if (this.currentIndex <= this.executionHistory.length) {
            let result = this.executionHistory[this.currentIndex]
            this.currentIndex++
            return result
        }

        let result = callb()
        executionHistory.push({ result })
        currentIndex++
        return result
    }
}

```