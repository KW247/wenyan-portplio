"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "zh" ? (
        // <p>{t("desc")}</p> //这样一段话没法分段
        <div className="flex flex-col gap-2">
          <div>我是一个热爱生活，热爱思考，思维开拓的人</div>
          <div>
            从2019年结束高中生活以后，我渐渐的开始对未来进行思考，什么是我热爱的？什么是我擅长的？于是带着这种疑惑，我来到了山东理工大学进行了四年的金融专业的学习。通过2019-2023这四年的学习生活，我不仅收获了专业知识还收获了友谊。
          </div>
          <div>
            在本科结束后，我认为我仍需要对世界继续探索，带着对世界的憧憬和知识的渴望，我来到了英国圣安德鲁斯大学进行为期一年的学习生活。我的专业是健康数据科学，在这一年我被健康行业的兴趣不断增加，通过数据分析辅助，对各种医疗数据加以分析，探求对人体的不通过影响，我认为这对未来医疗发展带来积极影响。这也成为我未来希望深耕的领域。
          </div>
          <div>
            对任何一个事物，一个行业的热爱都不是靠自己一个人可以维系，加入一个团队，将自己的热爱与团队的总目标向匹配才能碰撞出更大的火花。
          </div>

          <div>
            所以，未知领域的探索，我目前在积极准备求职。
          </div>
        </div>
      ) : (
        <>
          <p className="mb-3">
            My journey into data science kicked off during my undergrad in
            <span className="font-medium italic">
              {" "}
              Finance
            </span> at {}
            <span className="italic underline">
              <a
                href="https://en.wikipedia.org/wiki/Wuhan_University"
                target="_blank"
              >
                Shandong University of Technology.
              </a>
            </span>{" "}
            As a freshman, I got my feet wet with the basics of computer
            science, databases, and Python. But what truly sparked my passion
            was a course on semantic publishing—there, I used HTML and CSS to
            create a webpage dedicated to my favorite figure skater,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Yuzuru_Hanyu"
              target="_blank"
              className="italic underline"
            >
              Yuzuru Hanyu.{" "}
            </a>
            This experience opened my eyes to the charm of web development———
            <span className="font-medium italic">
              literally, you can build anything you envision with code.
            </span>
          </p>

          <p className="mb-3">
            I sharpened my front-end development skills through internships at
            Internships at Wuhan University&apos;s Big Data Institute and later
            at{" "}
            <span className="italic underline">
              <a href="https://www.nio.com/careers" target="_blank">
                {" "}
                NIO Inc.
              </a>
            </span>{" "}
            Working closely with developers, designers, testers, and product
            managers, I loved the buzz of a team pulling together to make our
            product better. And there’s nothing quite like the thrill of seeing
            my own code being used by thousands—it’s what solidified my decision
            to pursue a career in front-end development.
          </p>

          <p className="mb-3">
            I’m now doing my Masters in
            <span className="font-medium italic"> Computing and IT</span> at the{" "}
            <span className="italic underline">
              <a href="https://www.st-andrews.ac.uk/" target="_blank">
                University of St Andrews.{" "}
              </a>
            </span>
            I thrive on programming challenges and enjoy working with teams to
            solve complex problems. I specialize in technologies such as
            <span className="font-medium italic"> React, Next.js and Vue</span>,
            and have a solid understanding of{" "}
            <span className="font-medium italic">
              JavaScript, TypeScript and HTML/CSS
            </span>
            .{" "}
          </p>

          <p>
            In my spare time, I enjoy exploring new technologies and building
            interesting projects. I also run my social media accounts on
            platforms like Bilibili and Xiaohongshu, where I share tech tips and
            tricks. And when I’m not at the computer, you’ll find me
            <span className="font-medium italic">
              {" "}
              cooking up a storm, catching a movie, or keeping fit with regular
              workouts.
            </span>
          </p>
        </>
      )}
    </motion.section>
  )
}
