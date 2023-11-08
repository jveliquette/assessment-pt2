type CustomerInfo = {
    customerId: string;
    name: string;
    contactDetails: ContactDetails
    purchases: Purchases;
}

type ContactDetails = {
    email: string;
    phone: string;
}

type Purchases = {
    purchaseId: string;
    date: string;
}

[
    {
        "customerId": "CUST01",
        "name": "Alice",
        "contactDetails": {
            "email": "alice@example.com",
            "phone": "1234567890"
        },
        "purchases": [
            {
                "purchaseId": "PUR01",
                "date": "2023-01-01"
            }
        ]
    },
    {
        "customerId": "CUST02",
        "name": "Bob",
        "contactDetails": {
            "email": "bob@example.com",
            "phone": "0987654321"
        },
        "purchases": [
            {
                "purchaseId": "PUR02",
                "date": "2023-02-01"
            }
        ]
    }
]
