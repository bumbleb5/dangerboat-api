// FIRST STEP - DEFINE MODEL
export class Plant {
    // This longhand way is not necessary when using the public declaration in front of the properties
    // plantId: string;
    // commonName: string;
    // botName: string;
    // acqDate: string;
    // lightPref: number;
    // waterPref: number;
    // npkPref: string;
    // location: string;
    // genusId: string;
    //
    // constructor(plantId, commonName, botName, acqDate, lightPref, waterPref, npkPref, location, genusId) {
    //     this.plantId = plantId;
    //     this.commonName = commonName;
    //     this.botName = botName;
    //     this.acqDate = acqDate;
    //     this.lightPref = lightPref;
    //     this.waterPref = waterPref;
    //     this.npkPref = npkPref;
    //     this.location = location;
    //     this.genusId = genusId;
    // }
    constructor(
        public plantId: string,
        public commonName: string,
        public botName: string,
        public acqDate: string,
        public lightPref: number,
        public waterPref: number,
        public npkPref: string,
        public location: string,
        public genusId: string,
    ) {}
}
