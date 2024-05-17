// install bun
// curl -fsSL https://bun.sh/install | bash

import { $ } from 'bun';

// install rust
await $`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -y`

await $`sudo snap install go --classic`
await $`sudo snap install node --classic`
await $`sudo snap install docker`
await $`sudo snap install direnv`
await $`sudo snap install jq`

// pnpm
await $`curl -fsSL https://get.pnpm.io/install.sh | sh -`

// foundry
await $`curl -L https://foundry.paradigm.xyz | bash`
await $`foundryup`

await $`git clone https://github.com/ethereum-optimism/optimism.git --recurse-submodules`
await $`git clone https://github.com/ethereum-optimism/op-geth.git`