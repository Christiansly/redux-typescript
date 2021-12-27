interface DepositAction {
    type: "deposit"
    payload: number
}

interface WithdrawAction {
    type: "withdraw"
    payload: number
}

interface BankruptAction {
    type: "bankrupt"
}

interface InputAction {
    type: "input"
    payload: number
}

export type Action = DepositAction | WithdrawAction | BankruptAction | InputAction

