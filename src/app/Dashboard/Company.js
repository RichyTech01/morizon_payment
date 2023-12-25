import { Lists } from "@/components/Data";
import MorizonError from "../Errors/MorizonError";

const Company = {
    comapnies: [],
    list: async () => {
        return Company.comapnies;
    },
    delete: async (id) => {
        return Company.comapnies = Company.comapnies.filter(c => c.id != id)
    },
    turnOf: async (id) => {
        const foundCompany = Company.comapnies.find(c => c.id == id)
        if (!foundCompany) throw new MorizonError('Unable to find company!')
        Company.comapnies = Company.comapnies.map(c => {
            if (c.id == id) {
                c.status = !c.status;
            }
            return c;
        })
    }
}

Company.comapnies = Lists.map(c => {
    return { ...c, status: true }
});

export default Company;