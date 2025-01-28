
const csvConfig = {
    headers: [
      {
        name: "name",
        inputName: "name",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "description",
        inputName: "description",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "symbol",
        inputName: "symbol",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "edition",
        inputName: "edition",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "royalties",
        inputName: "royalties",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "identifier",
        inputName: "identifier",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "image1",
        inputName: "image1",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "image2",
        inputName: "image2",
        required: false,
      },
      {
        name: "image3",
        inputName: "image3",
        required: false,
      },
      {
        name: "attribute1",
        inputName: "attribute1",
        required: false,

      },
      {
        name: "attribute2",
        inputName: "attribute2",
        required: false,

      },
      {
        name: "attribute3",
        inputName: "attribute3",
        required: false,

      },
      {
        name: "attribute4",
        inputName: "attribute4",
        required: false,

      },
      {
        name: "attribute5",
        inputName: "attribute5",
        required: false,

      },
      {
        name: "attribute6",
        inputName: "attribute6",
        required: false,

      },
      {
        name: "attribute7",
        inputName: "attribute7",
        required: false,

      },
      {
        name: "attribute8",
        inputName: "attribute8",
        required: false,

      },
      {
        name: "listingMode",
        inputName: "listingMode",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "price",
        inputName: "price",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "offerPrice",
        inputName: "offerPrice",
        required: true,
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }
      },
      {
        name: "auctionEnd",
        inputName: "auctionEnd",
        requiredError: function (headerName, rowNumber, columnNumber) {
          return `${headerName} is required in the ${rowNumber} row / ${columnNumber} column`
        }

      },

    ]
  };

export default csvConfig;