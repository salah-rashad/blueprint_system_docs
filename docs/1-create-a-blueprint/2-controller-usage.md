---
sidebar_position: 2
---

# Controller Usage

Create a Blueprint widget with a **controller**

## Initialization

First of all, initialize a new instance of a blueprint controller

```dart
BlueprintController instance = BlueprintController.instance;
```

## Create the Blueprint

Add the `Blueprint` to your widget and use the `controller` parameter and assign the controller instance to it

```dart title="my-page.dart"
import 'package:blueprint_system/blueprint.dart';

...

@override
Widget build(BuildContext context) {
  return Scaffold(
    appBar: AppBar(
      title: const Text("My Page"),
    ),
    // highlight-start
    body: Blueprint(
      controller: instance
    ),
    // highlight-end
  );
}
```

Now that we've built the Blueprint, we need to populate it with some nodes so it can function.


Before we add nodes, we'll write a function that returns a widget that will be used as a child of the nodes; in other words, it'll show how the nodes look.

```dart
Widget nodeChild(Color color) {
  return Container(
    color: color,
  );
}
```

## Add a single node
Using the `addNode()` function we can add a single node every time we call this function.  
For example:

```dart
var node1 = FixedNode(
  child: (c) => nodeChild(Colors.red),
);

var node2 = DraggableNode(
  initPosition: const Offset(200, 300),
  child: (c) => nodeChild(Colors.green),
);

// highlight-start
instance.addNode(node1);
instance.addNode(node2);
// highlight-end
),
```

## Add multiple nodes
Using the `addNodes()` function we can add multiple nodes at once every time we call this function.  
For example:

```dart
var node1 = FixedNode(
  child: (c) => nodeChild(Colors.red),
);

var node2 = DraggableNode(
  initPosition: const Offset(200, 300),
  child: (c) => nodeChild(Colors.green),
);

// highlight-start
instance.addNodes([node1, node2]);
// highlight-end
),
```

:::note 
Later, we'll go over how nodes work and how to use them in more detail.  
But for the time being, let's concentrate on Blueprint.
:::

## Summary

### Preview
![basic-usage-01](img/basic-usage-01.png)

### Full Example
```dart title="my-page.dart"
import 'package:blueprint_system/blueprint_system.dart';
import 'package:flutter/material.dart';

class MyPage extends StatelessWidget {
  const MyPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("My Page"),
      ),
      body: Blueprint(
        children: [
          FixedNode(
            child: (c) => nodeChild(Colors.red),
          ),
          DraggableNode(
            initPosition: const Offset(200, 300),
            child: (c) => nodeChild(Colors.green),
          ),
        ],
      ),
    );
  }

  Widget nodeChild(Color color) {
    return Container(
      color: color,
    );
  }
}
```
