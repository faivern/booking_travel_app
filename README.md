<<<<<<< HEAD
# Bokningssystem för Resande (CRUD-applikation / AIRBNB-CLONE)

## Projektöversikt
Det här projektet är ett bokningssystem för resande, där användare kan söka efter och boka boenden, transport eller andra resetjänster. Systemet bygger på en tydlig CRUD-struktur (Create, Read, Update, Delete) och erbjuder ett RESTful API för att interagera med databasen samt integration med Airbnb:s API.

### Mål
- Bygga en applikation som visar förståelse för backendutveckling med API och databaser.
- Implementera CRUD-operationer.
- Använda PostgreSQL eller MongoDB för att hantera data.
- Skapa ett lättanvänt API som kan integreras med Airbnb:s API och en frontend.

---

## Funktionalitet (CRUD)

### Create
- Skapa nya användare (registrering).  +
- Skapa nya bokningar för boenden eller transport.

### Read
- Hämta en lista över tillgängliga boenden via Airbnb:s API.
- Visa användarprofiler och deras tidigare eller kommande bokningar.

### Update
- Uppdatera detaljer i en bokning (t.ex. ändra datum eller plats).
- Uppdatera användarprofiler (t.ex. ändra kontaktuppgifter).

### Delete
- Ta bort bokningar (avbokning).
- Ta bort en användare från systemet.

---

## Teknikstack

### Backend
- **Node.js** med **Express.js** för API-hantering (alternativt Python med Flask/FastAPI).

### Databas
- **PostgreSQL** för strukturerad data (alternativt MongoDB för dokumentbaserad data).

### Frontend (valfritt)
- **React.js** eller **Vue.js** för att skapa ett enkelt webbgränssnitt för API-funktioner.

### Deployment
- **Docker** för containerisering.
- **AWS** eller **DigitalOcean** för hosting.

---

## API-dokumentation

### Endpoints
- **POST /users**: Skapa en ny användare.
- **GET /listings**: Lista alla tillgängliga boenden från Airbnb:s API.
- **POST /bookings**: Skapa en ny bokning.
- **GET /bookings/:id**: Hämta detaljer om en bokning.
- **PUT /bookings/:id**: Uppdatera en befintlig bokning.
- **DELETE /bookings/:id**: Radera en bokning.

---

## Databasdesign

### PostgreSQL
**Tabell: Users**
| ID | Name      | Email             | Phone      |
|----|-----------|-------------------|------------|
| 1  | John Doe  | john@example.com  | 1234567890 |

**Tabell: Listings**
| ID | Name         | Location        | Price      |
|----|--------------|-----------------|------------|
| 1  | Cozy Cabin   | Stockholm       | 1500       |

**Tabell: Bookings**
| ID | UserID | ListingID | StartDate         | EndDate           |
|----|--------|-----------|-------------------|-------------------|
| 1  | 1      | 1         | 2024-12-24       | 2024-12-26       |

### MongoDB (alternativ)
```json
{
  "users": [
    {
      "_id": "1",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890"
    }
  ],
  "listings": [
    {
      "_id": "1",
      "name": "Cozy Cabin",
      "location": "Stockholm",
      "price": 1500
    }
  ],
  "bookings": [
    {
      "_id": "1",
      "userId": "1",
      "listingId": "1",
      "startDate": "2024-12-24",
      "endDate": "2024-12-26"
    }
  ]
}
```

---

## Utvecklingssteg
1. **Setup**:
   - Installera Node.js/Express och PostgreSQL/MongoDB.
   - Skapa en databas och konfigurera anslutningen.
2. **API-utveckling**:
   - Bygg API:et med CRUD-endpoints.
   - Testa API:et med verktyg som Postman.
   - Integrera med Airbnb:s API för att hämta boendedata.
3. **Frontend (valfritt)**:
   - Skapa ett gränssnitt för användare att interagera med systemet.
4. **Deployment**:
   - Containerisera med Docker.
   - Host:a backend och eventuell frontend.
5. **Dokumentation**:
   - Dokumentera API och tekniska beslut i en README.

---

## Utmaningar och Lösningar
- **Hantering av överlappande bokningar**:
  - Implementera logik för att förhindra dubbelbokning av boenden.
- **Autentisering och Säkerhet**:
  - Använd JWT för säkerhet och användarhantering.
- **Integration med Airbnb**:
  - Använd deras API för att hämta aktuella listningar och deras tillgänglighet.

---

## Kontakt
Om du har frågor eller vill ha support under utvecklingen, kontakta mig på **[din e-post här]**.

=======
# booking_travel_app
CRUD Application
>>>>>>> 0c7bed90df497a34f8a561f561f0e57c300cfd97
