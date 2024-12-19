import github from "../assets/github.svg"
import gitlab from "../assets/gitlab.svg"
import bitbucket from "../assets/bitbucket.svg"
import key from "../assets/key.svg"
import azure from "../assets/azure.svg"

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