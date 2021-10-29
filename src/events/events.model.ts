export class EventModel {
    constructor(
        public plantId: string,
        public eventId: string,
        public eventType: string,
        public eventDate: string,
        public eventNotes: string,
    ) {}
}