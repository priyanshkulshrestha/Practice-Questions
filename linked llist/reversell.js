class Solution {
    sol(head, prev){
        if(head.next == null){
            head.next=prev;
            return head;
        }else{
            let newHead = this.sol(head.next, head);
            head.next = prev;
            return newHead;
        }
        
    }
    reverseList(head) {
        // your code here
        // itterative code
        // let curr = head;
        // let prev = null;
        // while(head){
        //     curr = head;
        //     let temp = head.next;
        //     curr.next = prev;
        //     prev = head;
        //     head = temp;
        // }

        // recursive code
        // return this.sol(head, null)
    }
}