import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "./supabase";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const { data, error } = await supabase.from("entries").select("*");
    if (error) throw error;
    return data;
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default studentsSlice.reducer;
