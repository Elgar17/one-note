function LinkedList() {

    function Node(data) {
        this.data = data;
        this.next = null;
    }

    this.head = null;
    this.length = 0;


    LinkedList.prototype.append = function (elment) {
        if (this.head === null) {
            this.head = new Node(elment)
        } else {
            var current = this.head;
            while (current) {
                current = current.next;
            }
            current.next = new Node(elment)
            this.length++
        }
    }

    LinkedList.prototype.toString = function () {
        var current = this.head;
        var str = ''
        while (current) {
            str += current.head + ""
            current = current.next
        }
        return str;
    }
}