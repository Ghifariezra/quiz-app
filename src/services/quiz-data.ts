import { supabase } from "@/lib/supabase/client";

export const fetchData = async (path: string, difficulty: string) => {
    const { data, error } = await supabase
        .from(path.toLowerCase())
        .select("*")
        .eq("difficulty", difficulty);

    if (error) {
        console.error("Supabase error:", error);
        return [];
    }

    return data;
};
