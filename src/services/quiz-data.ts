import { supabase } from "@/lib/supabase/client";

class QuizData {
    constructor() { }
    async fetchData(path: string, difficulty: string) {
        const { data, error } = await supabase
            .from(path.toLowerCase())
            .select("*")
            .eq("difficulty", difficulty).limit(2);

        if (error) {
            console.error("Supabase error:", error);
            return [];
        }

        return data;
    }
}

export default new QuizData();