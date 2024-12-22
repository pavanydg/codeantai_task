import github from "../assets/github.svg"
import gitlab from "../assets/gitlab.svg"
import bitbucket from "../assets/bitbucket.svg"
import key from "../assets/key.svg"
import azure from "../assets/azure.svg"
import home from "../assets/home.svg"
import book from "../assets/book.svg"
import cloud from "../assets/cloud.svg"
import code from "../assets/code.svg"
import gear from "../assets/gear.svg"
import phone from "../assets/phone.svg"
import signout from "../assets/sign-out.svg"

export const saasButtons = [
    {
        id: 1,
        icon: github,
        text: "Sign in with Github"
    },
    {
        id: 2,
        icon: bitbucket,
        text: "Sign in with BitBucket"
    },
    {
        id: 3,
        icon: azure,
        text: "Sign in with Azure Devops"
    },
    {
        id: 4,
        icon: gitlab,
        text: "Sign in with GitLab"
    },
]

export const selfhostedButtons = [
    {
        id: 1,
        icon: gitlab,
        text: "Self Hosted GitLab"
    },{
        id: 2,
        icon: key,
        text: "Sign in with SSO"
    }
]

export const sideBarElements = [
    {
        id: 1,
        icon: home,
        text: "Repositories"
    },
    {
        id: 2,
        icon: code,
        text: "AI Code Review"
    },
    {
        id: 3,
        icon: cloud,
        text: "Cloud Security"
    },
    {
        id: 4,
        icon: book,
        text: "How to Use"
    },
    {
        id: 5,
        icon: gear,
        text: "Settings"
    }
]

export const sideBarBottomElements = [
    {
        id: 6,
        icon: phone,
        text: "Support"
    },
    {
        id: 7,
        icon: signout,
        text: "Logout"
    }
]

export const projects = [
    {
        id: 1,
        title: "design-system", 
        visibility: "Public", 
        techstack: "React", 
        size: "7320", 
        updatedDay: "1"
    },
    {
        id: 2,
        title: "codeant-ci-app", 
        visibility: "Private", 
        techstack: "Javascript", 
        size: "5871", 
        updatedDay: "2"
    },
    {
        id: 3,
        title: "analytics-dashboard", 
        visibility: "Private", 
        techstack: "Python", 
        size: "4521", 
        updatedDay: "5"
    },
    {
        id: 4,
        title: "mobile-app", 
        visibility: "Public", 
        techstack: "Swift", 
        size: "3296", 
        updatedDay: "3"
    },
    {
        id: 5,
        title: "e-commerce-platform", 
        visibility: "Private", 
        techstack: "Java", 
        size: "6210", 
        updatedDay: "6"
    },
    {
        id: 1,
        title: "blog-website", 
        visibility: "Public", 
        techstack: "HTML/CSS", 
        size: "1876", 
        updatedDay: "4"
    },
    {
        id: 1,
        title: "social-network", 
        visibility: "Private", 
        techstack: "PHP", 
        size: "5432", 
        updatedDay: "7"
    },
]