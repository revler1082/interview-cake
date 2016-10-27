function reverse_linked_list(head) {
    var prev = null;
    while(head != null) {
      var old_next = head.next;
      console.log(head.value + ' -> ' + (prev != null ? prev.value : 'null'));
      head.next = prev;
      console.log('head.next -> ' + (head.next != null ? head.next : 'null'));
      prev = head;
      head = old_next;
    }
    
    var new_head = prev;
    while(new_head.next) {
      console.log(new_head.value);
      new_head = new_head.next;
    }
}

var head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null
        }
      }
    }
  }
};

console.log(reverse_linked_list(head));
