# Trados bot

This is a dockerized trading bot made for binance.

<p align="center"><img alt="give-some-hours ether address" src="homepage.png" style="box-shadow: 0 0 10px 0px" /></p>

Features:

- Observe real time symbols price with a 1s threshold
- Get notified when they reach a certain limit
- Place market and limit orders

## Run locally

You can easily run the project locally by following these steps:

1. Fill in the configuration file `api/config/production.json`

   - **db**: Change password or leave it like this.
   - **binance**: Fill with you `apiKey` and your `secretKey` that you'll find here: https://www.binance.com/en/my/settings/api-management
     `test` let you enable or not the test mode for order. (Note that this is not a dynamic value, it's computed on `make build`)
   - **notifier**: Fill in with the configurations relating to your mailbox according to the nodemailer service configurations (support gmail and hotmail). For gmail, you'll need to follow this step: https://myaccount.google.com/lesssecureapps

2. Build containers

```bash
$ make build
```

3. Create the database

```bash
$ make db@create
```

<sup>If it fails, it's probably because the `db` container may take a while to get ready. Wait a bit and start over.
<strong>Note:</strong> This action is idempotent and will destroy your database if you have already performed it. Please run `make db@backup` first.
</sup>

4. Run it

```bash
$ make up
```

<sup>Then browse http://localhost</sup>

## Support

If you have any issue or ideas to improve it... Let's discuss it in the issues!
If you want to donnate, you can do it on the `give-some-hours` ether address:

<p align="center"><img alt="give-some-hours ether address" src="qrcode.svg"  /></p>
<p align="center">
    <sub>0xf9e38fA3fA84A4b371f7d3dDeda80D11577C1814</sub>
</p>
