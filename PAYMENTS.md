We have been investigating ways to enable users to make flows to perform payments and manage them.

The "**Web Money block**" can be used in a flow to stream ILP payments in real time, and a **Wallet block** can see account balances, supporting Uphold so far.

We enable Coil users to stream XRP using Web Monetization's Interledger Protocol. The block works with, or without the Coil browser extension, and the account balances can be seen by recipients using the Wallet block to see (currently integrated using Uphold OAuth).

Check out the screencast videos:
-   [Kendraio Player with Coil login, Web Monetization without a browser extension](https://www.youtube.com/watch?v=T2yXWJKIgOQ)

-   [Uphold API integrated with Kendraio App Wallet Block](https://www.youtube.com/watch?v=QoZA2F-ddd8)

**Block documentation**

-   [Web Money Block](https://github.com/kendraio/kendraio-app/blob/main/docs/workflow/blocks/web_money.rst)

-   [Wallet Block](https://github.com/kendraio/kendraio-app/blob/main/docs/workflow/blocks/wallet.rst)

**Example flows**

-   Check out our Player:
<https://app.kendra.io/player/all>

-   Wallet Block demo:
<https://app.kendra.io/dsp1/walletArray>

-   Statistics using anonymous analytics: 
<https://app.kendra.io/player/stats>

**Components:**

-   Web Money block: 
<https://github.com/kendraio/kendraio-app/blob/main/src/app/blocks/web-money/web-money.component.ts>

-   Wallet block:
https://github.com/kendraio/kendraio-app/blob/main/src/app/blocks/wallet/wallet.component.ts

-   Uphold service library:
https://github.com/kendraio/kendraio-app/blob/main/src/app/_shared/services/uphold_service.ts
