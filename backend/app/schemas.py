from pydantic import BaseModel

class PregnancyRequest(BaseModel):
    lmp_date: str  # YYYY-MM-DD

class PregnancyResponse(BaseModel):
    due_date: str
    gestational_age: str
    today: str
