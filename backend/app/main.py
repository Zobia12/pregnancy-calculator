from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import date, timedelta

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://204.48.22.252:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class ConceptionInput(BaseModel):
    days_since_conception: int

@app.post("/calculate")
async def calculate_due_date(data: ConceptionInput):
    days_pregnant = data.days_since_conception
    conception_date = date.today() - timedelta(days=days_pregnant)
    estimated_due_date = conception_date + timedelta(days=280)
    days_to_due = (estimated_due_date - date.today()).days
    weeks_pregnant = round(days_pregnant / 7, 1)

    return {
        "weeks_pregnant": weeks_pregnant,
        "due_date": estimated_due_date.strftime("%Y-%m-%d"),
        "days_to_due": days_to_due
    }
