
type MinStack struct {
	MinimalNumber       int
	Stack               []int
	HistoryMinimalStack []int
}

func Constructor() MinStack {
	return MinStack{
		MinimalNumber:       math.MaxInt,
		Stack:               nil,
		HistoryMinimalStack: nil,
	}
}

// every push and pop must calculate the minimal number
func (this *MinStack) Push(val int) {
	if val <= this.MinimalNumber {
		this.MinimalNumber = val
		// push to history stack
		this.HistoryMinimalStack = append(this.HistoryMinimalStack, val)
	}
	this.Stack = append(this.Stack, val)
}

func (this *MinStack) Pop() {
	top := this.Top()
	if this.MinimalNumber == top {
		// pop the HistoryMinimalStack
		newStack := this.HistoryMinimalStack[:len(this.HistoryMinimalStack)-1]
		this.HistoryMinimalStack = newStack
		if len(this.HistoryMinimalStack) > 0 {
			this.MinimalNumber = this.HistoryMinimalStack[len(this.HistoryMinimalStack)-1]
		} else {
			this.MinimalNumber = math.MaxInt
		}
	}

	poppedStack := this.Stack[:len(this.Stack)-1]
	this.Stack = poppedStack
}

func (this *MinStack) Top() int {
	return this.Stack[len(this.Stack)-1]
}

func (this *MinStack) GetMin() int {
	return this.MinimalNumber
}
