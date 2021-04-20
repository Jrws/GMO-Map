function Country(name, common, code, info, image) {
    this.name = name;
    this.common = common;
    this.code = code;
    this.info = info;
    this.image = image;
}

var usa = new Country(
    "United States of America",
    "United States of America",
    "us",
    "info",
    "image"
);

var brazil = new Country(
    "Brazil",
    "Brazil",
    "br",
    "info",
    "image"
);

var russia = new Country(
    "Russian Federation",
    "Russia",
    "ru",
    "info",
    "image"
);