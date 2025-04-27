import { UserInput } from "./Types";

export const userdata: UserInput = {
    subs: [
        {
            data: "DM",
            staff_id: 100,
            islab: false,
            count: 6,
        },
        {
            data: "DPCO",
            staff_id: 101,
            islab: false,
            count: 4,
        },
        {
            data: "FDS",
            staff_id: 102,
            islab: false,
            count: 7,
        },
        {
            data: "DSA",
            staff_id: 103,
            islab: false,
            count: 5,
        },
        {
            data: "OOPS",
            staff_id: 104,
            islab: false,
            count: 6,
        },
        {
            data: "placement",
            staff_id: 103,
            islab: false,
            count: 1,
        },
        {
            data: "Library",
            staff_id: 104,
            islab: false,
            count: 1,
        },
        {
            data: "DSA LAB",
            staff_id: 103,
            islab: true,
            count: 3,
        },
        {
            data: "OOPS LAB",
            staff_id: 104,
            islab: true,
            count: 3,
        },
        {
            data: "DPCO LAB",
            staff_id: 101,
            islab: true,
            count: 2,
        },
        // { data: "DS LAB", count: 3 },
        {
            data: "PD LAB",
            staff_id: 102,
            islab: true,
            count: 2,
        },
        {
            data: "Activity",
            staff_id: 104,
            islab: true,
            count: 2,
        },
    ],

    days_settings: {
        class_profile: { year: 2, section: "A" },
        days: {
            monday:{ need_lab: false, in_afternoon: true },
            tuesday:{ need_lab: false, in_afternoon: true },
            wednesday:{ need_lab: true, in_afternoon: true },
            thursday:{ need_lab: true, in_afternoon: true },
            friday:{ need_lab: true, in_afternoon: true },
            saturday:{ need_lab: true, in_afternoon: true }
        }
    },
};