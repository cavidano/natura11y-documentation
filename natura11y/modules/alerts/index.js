import "./_style.scss"

//////////////////////////////////////////////
// Alerts
//////////////////////////////////////////////

export default class Alerts {
  constructor() {
    const alertDismissableList = document.querySelectorAll(
      ".alert--dismissable"
    )

    const closeButtonHTML = `
        <button className="button button--icon-only">
            <span className="icon icon-close" aria-label="Close" aria-hidden="true">
        </button>`

    alertDismissableList.forEach(alertDismissable => {
      alertDismissable.insertAdjacentHTML("afterbegin", closeButtonHTML)

      const alertCloseButton = alertDismissable.querySelector("button")

      alertCloseButton.addEventListener("click", event => {
        event.preventDefault()

        alertDismissable.classList.add("dismissed")

        const dismissed = document.querySelector(".dismissed")

        dismissed.addEventListener("animationend", () => {
          alertDismissable.remove()
        })
      })
    })
  }
}
