import {test as base } from "@playwright/test";

type myfixture={
    logindata:any;
    testdata:any;
}

export const test =base.extend<myfixture>({
    logindata:{
        username:'Admin',
        password:'admin123'
    },
    testdata:{
        firstN:'Saeed',
        MiddelN:'K',
        lastN:'Khan',
        email:'saeedullah321@gmail.com'
    }
})
