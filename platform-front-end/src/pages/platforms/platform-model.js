export class PlatformModel{
    constructor(id, name, company, platformTypeId, platformTypeDescription){
        
        this.id = id;
        this.name = name;
        this.company = company;
        this.platformType =  {
                id: platformTypeId,
                description: platformTypeDescription
            }
    }
}