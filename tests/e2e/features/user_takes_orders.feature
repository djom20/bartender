@complete @orders

Feature: The user takes orders

    Scenario: The user not has orders
      Given the user has not orders
      When the user is in dashboard
      Then the orders should not be displayed
        And the total should be equal zero

    # Scenario: The user has orders
    #   Given the user has orders
    #   When the user is in dashboard
    #   Then the orders should be displayed
    #     And the total should not be equal zero

    # Scenario: The user adds a order
    #   Given the user has not orders
    #     And the user is in dashboard
    #   When the user clicks on Add Order
    #     And the user selects the drink
    #     And the user selects the amount
    #     And the user clicks on Ok
    #   Then the drink should be displayed
    #     And the amount should be displayed
    #     And the price should be displayed
    #     And the total should not be equal zero
