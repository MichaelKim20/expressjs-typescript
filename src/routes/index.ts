import * as express from "express";
import {Page} from "../modules/core/Page";

export const register = (app: express.Application) => {
    // home page
    app.get("/", (req: any, res) => {
        const page = new Page(0, "Developers page");
        res.render('index',
            {
                title: page.getTitle(),
                menu: page.getMenu()
            });
    });

    app.get("/PF1000", (req: any, res) => {
        const page = new Page(1, "Distribute Genesis Coins");
        res.render('pf1000',
            {
                title: page.getTitle(),
                menu: page.getMenu()
            });
    });

    app.get("/PG1000", (req: any, res) => {
        const page = new Page(2, "Proposal Fee Transfer");
        res.render('pg1000',
            {
                title: page.getTitle(),
                menu: page.getMenu()
            });
    });

    app.get("/PG2000", (req: any, res) => {
        const page = new Page(2, "Voting Fee Transfer");
        res.render('pg2000',
            {
                title: page.getTitle(),
                menu: page.getMenu()
            });
    });

    app.get("/PG3000", (req: any, res) => {
        const page = new Page(2, "Voting");
        res.render('pg3000',
            {
                title: page.getTitle(),
                menu: page.getMenu()
            });
    });
};
