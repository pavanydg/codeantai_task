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
        id: 1,
        icon: azure,
        text: "Sign in with Azure Devops"
    },
    {
        id: 1,
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
        id: 1,
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
        id: 1,
        icon: cloud,
        text: "Cloud Security"
    },
    {
        id: 1,
        icon: book,
        text: "How to Use"
    },
    {
        id: 1,
        icon: gear,
        text: "Settings"
    }
]

export const sideBarBottomElements = [
    {
        id: 1,
        icon: phone,
        text: "Support"
    },
    {
        id: 2,
        icon: signout,
        text: "Logout"
    }
]