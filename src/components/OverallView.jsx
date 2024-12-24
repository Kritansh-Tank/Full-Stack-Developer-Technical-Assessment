import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from "./studentsSlice";

const OverallView = ({ className = "" }) => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box
      className={`w-full bg-bg max-w-full overflow-hidden flex flex-row items-start justify-start py-0 pl-0 pr-5 box-border gap-5 leading-[normal] tracking-[normal] text-left text-base text-slategray font-p4 mq1050:pl-5 mq1050:box-border ${className}`}
    >
      <Box className="h-[789px] w-[248px] bg-white flex flex-col items-start justify-between py-[30px] px-3 box-border mq1050:hidden mq1050:pt-5 mq1050:pb-5 mq1050:box-border">
        <Box className="self-stretch flex flex-col items-start justify-start gap-[30px]">
          <img
            className="w-[98px] h-[42px] relative"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <Box className="self-stretch flex flex-col items-start justify-start gap-2">
            <Box className="self-stretch rounded-md flex flex-col items-start justify-center p-3">
              <Box className="flex flex-row items-center justify-start gap-3">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame.svg"
                />
                <a className="[text-decoration:none] relative leading-[22px] font-bold text-[inherit]">
                  Dashboard
                </a>
              </Box>
            </Box>
            <Box className="self-stretch rounded-md bg-whitesmoke-100 flex flex-col items-start justify-center p-3 text-gray">
              <Box className="flex flex-row items-center justify-start gap-3">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame-1.svg"
                />
                <Typography
                  className="relative inline-block min-w-[73px]"
                  variant="inherit"
                  component="b"
                  sx={{ lineHeight: "22px", fontWeight: "700" }}
                >
                  Students
                </Typography>
              </Box>
            </Box>
            <Box className="self-stretch rounded-md bg-white flex flex-col items-start justify-center p-3">
              <Box className="flex flex-row items-center justify-start gap-3">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame-2.svg"
                />
                <Box className="relative leading-[22px] font-semibold">
                  Chapter
                </Box>
              </Box>
            </Box>
            <Box className="self-stretch rounded-md bg-white flex flex-col items-start justify-center p-3">
              <Box className="flex flex-row items-center justify-start gap-3">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame-3.svg"
                />
                <Box className="relative leading-[22px] font-semibold">
                  Help
                </Box>
              </Box>
            </Box>
            <Box className="self-stretch rounded-md bg-white flex flex-col items-start justify-center p-3">
              <Box className="flex flex-row items-center justify-start gap-3">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/report.svg"
                />
                <Box className="relative leading-[22px] font-semibold">
                  Reports
                </Box>
              </Box>
            </Box>
            <Box className="self-stretch rounded-md bg-white flex flex-col items-start justify-center p-3">
              <Box className="flex flex-row items-center justify-start gap-3">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/setting.svg"
                />
                <Box className="relative leading-[22px] font-semibold">
                  Settings
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="rounded-md bg-bg flex flex-row items-start justify-start py-1 px-2.5 gap-1.5 text-mini text-icon-deactive">
          <button className="cursor-pointer [border:none] py-[5px] px-[15px] bg-white shadow-[0px_1px_4px_rgba(0,_0,_0,_0.1)] rounded-md flex flex-col items-start justify-start">
            <Box className="flex flex-row items-center justify-start gap-2">
              <img
                className="h-[22px] w-[22px] relative"
                alt=""
                src="/white.svg"
              />
              <Typography
                className="relative leading-[20px] text-typography text-left"
                component="b"
                sx={{ fontFamily: "'Noto Sans'", fontSize: "15px" }}
              >
                Light
              </Typography>
            </Box>
          </button>
          <Box className="rounded-md bg-bg flex flex-col items-start justify-start py-[5px] pl-[18px] pr-4">
            <Box className="flex flex-row items-center justify-start gap-2">
              <img
                className="h-[22px] w-[22px] relative"
                loading="lazy"
                alt=""
                src="/dark.svg"
              />
              <Box className="relative leading-[20px] font-medium inline-block min-w-[36px]">
                Dark
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <section className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-[calc(100%_-_268px)] text-left text-[18px] text-typography font-p4 mq1050:max-w-full">
        <Box className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
          <Box className="self-stretch flex flex-row items-start justify-start gap-[65px] max-w-full mq1050:flex-wrap mq750:gap-4 mq1125:gap-8">
            <TextField
              className="[border:none] bg-[transparent] flex-1 font-p4 font-medium text-[14px] text-icon-deactive min-w-[300px] max-w-full"
              placeholder="Search your course"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="18px" height="18px" src="/Search.svg" />
                ),
              }}
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "48px",
                  backgroundColor: "#fff",
                  paddingLeft: "20px",
                  borderRadius: "12px",
                  fontSize: "14px",
                },
                "& .MuiInputBase-input": {
                  paddingLeft: "10px",
                  color: "#808281",
                },
              }}
            />
            <Box className="w-[473px] flex flex-row items-start justify-between max-w-full gap-5 mq450:flex-wrap mq450:justify-center">
              <Box className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/help.svg"
                />
              </Box>
              <Box className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <Box className="flex flex-row items-start justify-start relative">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/message.svg"
                  />
                  <Box className="h-[11px] w-[11px] absolute !m-[0] top-[-2px] right-[-3px] rounded-[50%] bg-tomato-100 border-white border-[0px] border-solid box-border z-[1]" />
                </Box>
              </Box>
              <Box className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/settings.svg"
                />
              </Box>
              <Box className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <Box className="flex flex-row items-start justify-start relative">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/notification.svg"
                  />
                  <Box className="h-[11px] w-[11px] absolute !m-[0] top-[-2px] right-[0px] rounded-[50%] bg-tomato-100 border-white border-[0px] border-solid box-border z-[1]" />
                </Box>
              </Box>
              <Box className="flex flex-row items-start justify-start gap-5">
                <Box className="h-12 w-12 relative">
                  <Box className="absolute top-[0px] left-[0px] rounded-[10px] w-full h-full" />
                  <img
                    className="absolute top-[4px] left-[4px] rounded-lg w-10 h-10 object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/avatar-image@2x.png"
                  />
                </Box>
                <Box className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                  <a className="[text-decoration:none] relative leading-[26px] font-semibold text-[inherit]">
                    Adeline H. Dancy
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="self-stretch rounded-xl bg-white flex flex-col items-start justify-start pt-4 pb-5 pl-4 pr-[15px] gap-[38px] text-base text-darkslategray mq750:gap-[19px]">
            <Box className="self-stretch flex flex-row items-start justify-between gap-5 mq750:flex-wrap">
              <Box className="flex flex-row items-start justify-start gap-[9px]">
                <Box className="rounded-md bg-whitesmoke-200 flex flex-row items-start justify-start py-[7px] px-[15px] gap-2.5">
                  <Box className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <a className="[text-decoration:none] relative leading-[22px] font-bold text-[inherit] inline-block min-w-[86px]">
                      AY 2024-25
                    </a>
                  </Box>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-4.svg"
                  />
                </Box>
                <Box className="rounded-md bg-whitesmoke-200 flex flex-row items-start justify-start py-[7px] px-[15px] gap-2.5">
                  <Box className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <a className="[text-decoration:none] relative leading-[22px] font-bold text-[inherit] inline-block min-w-[54px]">
                      CBSE 9
                    </a>
                  </Box>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/frame-4.svg"
                  />
                </Box>
              </Box>
              <button className="cursor-pointer [border:none] py-[7px] pl-[15px] pr-3.5 bg-whitesmoke-200 rounded-md flex flex-row items-start justify-start gap-2.5">
                <Box className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img
                    className="w-5 h-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/plus.svg"
                  />
                </Box>
                <Typography
                  className="relative leading-[22px] text-darkslategray text-left"
                  component="b"
                  sx={{ fontFamily: "'Noto Sans'", fontSize: "16px" }}
                >
                  Add new Student
                </Typography>
              </button>
            </Box>
            <Box className="self-stretch flex flex-col items-start justify-start gap-[17px] text-xs text-black">
              <Box className="h-4 flex flex-row items-start justify-start py-0 px-px box-border">
                <Box className="h-4 w-[1106.5px] flex flex-row items-start justify-start gap-[83.2px]">
                  <Box className="h-4 w-[128.7px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                    <Typography
                      className="w-[98px] h-4 relative inline-block shrink-0"
                      variant="inherit"
                      component="b"
                      sx={{ fontWeight: "700" }}
                    >
                      Student Name
                    </Typography>
                  </Box>
                  <Box className="h-4 w-[81.9px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                    <Typography
                      className="w-[47.8px] h-4 relative inline-block shrink-0"
                      variant="inherit"
                      component="b"
                      sx={{ fontWeight: "700" }}
                    >
                      Cohort
                    </Typography>
                  </Box>
                  <Box className="h-4 w-[239.2px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                    <Typography
                      className="w-[54.5px] h-4 relative inline-block shrink-0"
                      variant="inherit"
                      component="b"
                      sx={{ fontWeight: "700" }}
                    >
                      Courses
                    </Typography>
                  </Box>
                  <Typography
                    className="h-4 w-[79.1px] relative inline-block shrink-0"
                    variant="inherit"
                    component="b"
                    sx={{ fontWeight: "700" }}
                  >
                    Date Joined
                  </Typography>
                  <Box className="h-4 w-[119.1px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                    <Typography
                      className="w-[66.8px] h-4 relative inline-block shrink-0"
                      variant="inherit"
                      component="b"
                      sx={{ fontWeight: "700" }}
                    >
                      Last login
                    </Typography>
                  </Box>
                  <Typography
                    className="h-4 w-[44.5px] relative inline-block shrink-0"
                    variant="inherit"
                    component="b"
                    sx={{ fontWeight: "700" }}
                  >
                    Status
                  </Typography>
                </Box>
              </Box>
              <Box className="w-[1121px] h-[552px] flex flex-col items-start justify-start gap-2">
                {students.map((student) => (
                  <React.Fragment key={student.id}>
                    <Box className="h-6 flex flex-row items-start justify-start py-0 px-px box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer">
                      <Box className="h-6 w-[1090.1px] relative">
                        <Box className="absolute top-[0px] left-[211.9px] w-[300.1px] h-6 flex flex-row items-start justify-start gap-[95.9px]">
                          <Box className="h-5 w-[69.2px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                            <Box className="w-[70.2px] h-4 relative inline-block shrink-0">
                              {student.corhort || "N/A"}
                            </Box>
                          </Box>
                          <Box className="h-6 w-[135px] rounded-md bg-bg flex flex-row items-start justify-start py-0.5 px-1 box-border">
                            <img
                              className="h-5 w-5 relative rounded object-cover"
                              loading="lazy"
                              alt="profile"
                              src={"/image.svg"}
                            />
                          </Box>
                        </Box>
                        <Box className="absolute top-[0px] left-[519.8px] w-[262.1px] h-6 flex flex-row items-start justify-start gap-[59.1px]">
                          <Box className="h-6 w-[120.5px] relative">
                            <Box className="absolute top-[0px] left-[0px] rounded-md bg-bg w-full h-full flex flex-row items-start justify-start py-0.5 px-1 box-border">
                              <img
                                className="h-5 w-5 relative rounded object-cover"
                                loading="lazy"
                                alt="icon"
                                src="/image-1@2x.png"
                              />
                            </Box>
                            <Box className="absolute top-[4px] left-[28px] font-medium inline-block w-[73px] h-4">
                              {student.courses
                                ? student.courses
                                    .split("CBSE 9")
                                    .filter(Boolean)
                                    .map(
                                      (course) => `CBSE 9 ${course.trim()}`
                                    )[1] || "N/A"
                                : "N/A"}
                            </Box>
                          </Box>
                          <Box className="h-5 w-[82.5px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                            <Box className="w-[83.5px] h-4 relative inline-block shrink-0">
                              {student.date_joined
                                ? new Date(
                                    student.date_joined
                                  ).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                  })
                                : "N/A"}
                            </Box>
                          </Box>
                        </Box>
                        <Box className="absolute top-[4px] left-[0px] w-full h-4 flex flex-row items-start justify-start gap-[280.1px]">
                          <Box className="h-4 w-[125.9px] relative inline-block shrink-0">
                            {student.student_name || "Unknown"}
                          </Box>
                          <Box className="h-4 w-[175.6px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                            <Box className="w-[86px] h-4 relative font-medium inline-block shrink-0">
                              {student.courses
                                ? student.courses
                                    .split("CBSE 9")
                                    .filter(Boolean)
                                    .map(
                                      (course) => `CBSE 9 ${course.trim()}`
                                    )[0] || "N/A"
                                : "N/A"}
                            </Box>
                          </Box>
                          <Box className="h-4 w-[229.4px] flex flex-row items-start justify-start gap-[78.9px]">
                            <Box className="h-4 w-[137.1px] relative inline-block shrink-0">
                              {student.last_login
                                ? (() => {
                                    const date = new Date(student.last_login);
                                    const formattedDate =
                                      date.toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                      });
                                    const formattedTime =
                                      date.toLocaleTimeString("en-US", {
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: true,
                                      });
                                    return `${formattedDate} ${formattedTime
                                      .replace(" am", " AM")
                                      .replace(" pm", " PM")}`;
                                  })()
                                : "Never"}
                            </Box>
                            <Box className="h-[15px] w-[14.4px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                              <Box
                                className={`w-[14.4px] h-3.5 relative rounded-[50%] ${
                                  student.status ? "bg-limegreen" : "bg-red-500"
                                }`}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className="w-[1122px] h-px relative border-whitesmoke-300 border-t-[1px] border-solid box-border" />
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </Box>
  );
};

OverallView.propTypes = {
  className: PropTypes.string,
};

export default OverallView;
