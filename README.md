# swagger-ui-linkable

Swagger UI as you know and love it, but with URL/query parameters to specify which OpenAPI/Swagger specification shall be displayed.

Can be used to reference specifications nicely and promptly, without the hassle of setting up Swagger UI manually.

## Usage

Just use `https://jmgraeffe.github.io/swagger-ui-linkable/?url=<URL to your spec>`, for example:

https://jmgraeffe.github.io/swagger-ui-linkable/?url=https://petstore.swagger.io/v2/swagger.json

### Aliases

Aliases are hardcoded short identifiers that specify the URL implicitly, with the goal of making the URL shorter, for example:

https://jmgraeffe.github.io/swagger-ui-linkable/?alias=petstore

If you want an alias to be added just hit me up in an issue, or you may fork the project and just use GitHub Pages to manage your own aliases.
There are also GitHub actions prepared for Dependabot and updating Swagger UI, because this project is based on [this project by Peter Evans](https://github.com/peter-evans/swagger-github-pages) and he did that.