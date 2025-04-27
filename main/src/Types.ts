export type Weekdays = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";

export interface TableData {
    department: string
    class: {
        year: number
        section: string
    }
    table : Record<Weekdays,DayData[]>
};

export type DayData = {
    data: string
    staff_id: number
    islab: boolean
    count: number
};

export interface Settings {
    class_profile: {
        year: number
        section: string
    }
    days: Record<Weekdays, { need_lab: boolean, in_afternoon: boolean }>
}

export interface UserInput {
    subs: {
        data: string
        staff_id: number
        islab: boolean
        count: number
    }[]
    days_settings: Settings
}
