## Huff Toolchain

GitHub Action that installs [huffc](https://github.com/huff-language/huff-rs).


### Example workflow

```yml
on: [push]

name: test

jobs:
  check:
    name: Huff project
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: recursive

      - name: Install Huff
        uses: huff-language/huff-toolchain@v2
        with:
          version: nightly

      - name: Compile
        run: huffc . -b
```


### Inputs

| **Name**  | **Required** | **Description**                                                                                               | **Type** |
|-----------|--------------|---------------------------------------------------------------------------------------------------------------|----------|
| `version` | Yes          | Version to install, e.g. `nightly` or `1.0.0`.  **Note:** Huff only has nightly builds for the time being. | string   |


### Summaries

You can add the output of `huffc` to GitHub step summaries. The summaries support GitHub flavored Markdown.

See the offical [GitHub docs](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary) for more information.


### Contributing

All contributions are welcome.

Make sure to install [ncc](https://github.com/vercel/ncc) in order to generate the build:
```bash
npm i -g @vercel/ncc
```


### Acknowledgements

- [Foundry Toolchain](https://github.com/foundry-rs/foundry-toolchain)